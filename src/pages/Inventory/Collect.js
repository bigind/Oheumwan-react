import {useEffect, useState} from "react";
import axios from "axios";
import {ingredientsJSON} from "../../utils/ingredients";

const Collect = () => {

    const [ingredients, setIngredients] = useState([]);  // 서버에서 가져온 유저의 재료
    const [isIngredientMenu, setIngredientMenu] = useState(true);
    const [selectIngredients, setSelectIngredients] = useState([]);

    useEffect(() => {
        axios.get('https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/ingredient?user_id=1')
            .then((res) => {
                const data = JSON.parse(res.data.body);
                console.log(data.ingredients);
                const ingredientsArray = Object.entries(data.ingredients);
                setIngredients(ingredientsArray);
            })
            .catch((err) => {
                console.log(err);
                setIngredients([]); // 에러 발생 시 빈 배열로 초기화
            });
    }, []);

    // 이미지를 클릭 시 selectImage 리스트에 추가 또는 삭제
    const selectIngredient = (ingredient) => {
        if (selectIngredients.includes(ingredient)) {
            setSelectIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredient));
        } else {
            setSelectIngredients(prevIngredients => [...prevIngredients, ingredient]);
        }
    };

    return (
        <>
            <div className="px-1 py-4">
                <h3 className="font-bold text-2xl font-sans ml-5 ">보관함</h3>
            </div>

            <select
                className="font-bold block ml-5 px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    if (selectedValue === "ingredient") {
                        setIngredientMenu(true);
                    } else if (selectedValue === "recipe") {
                        setIngredientMenu(false);
                    }
                }}
            >
                <option value="ingredient">재료</option>
                <option value="recipe">레시피</option>
            </select>

            {isIngredientMenu ? (
                <>
                    <ul className="grid grid-cols-5 gap-3 px-5 mt-5">
                        {ingredients && ingredients.map(([ingredient, quantity]) => {
                            // ingredientsJSON에서 title에 해당하는 항목 찾기
                            const foundIngredient = ingredientsJSON.find(item => item.title === ingredient);

                            return (
                                <li className="flex items-center flex-col" key={ingredient} onClick={() => selectIngredient(ingredient)}>
                                    <img src={selectIngredients.includes(ingredient) ?
                                        "https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-green-checkmark-error-image_1082147.jpg" :
                                        foundIngredient ? foundIngredient.imgSrc : ''} alt="" className="rounded-full w-16 h-16 object-cover" />
                                    <h5 className="font-semibold">{ingredient} x{quantity}</h5>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="my-4 ml-5 pt-10">
                        <button
                            type="button"
                            className="focus:outline-none text-white bg-black hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            레시피 추천

                        </button>
                    </div>
                </>
            ) :(
                <ul className="grid grid-cols-5 gap-3 px-5 mt-5">
                    <li className="flex items-center flex-col">
                        <img src="https://png.pngtree.com/element_our/20190523/ourlarge/pngtree-green-checkmark-error-image_1082147.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
                        <h5 className="font-semibold">체크</h5>
                    </li>
                </ul>
            ) }
        </>
    );
};

export default Collect;