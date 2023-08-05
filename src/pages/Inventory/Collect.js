import {useEffect, useState} from "react";
import axios from "axios";
import {ingredientsJSON} from "../../utils/ingredients";
import IngredientMenu from "./IngredientMenu";

const Collect = () => {

    const [ingredients, setIngredients] = useState([]);  // 서버에서 가져온 유저의 재료
    const [isMenu, setMenu] = useState(true);
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
                        setMenu(true);  // 재료 보관함 표시
                        setSelectIngredients([]);
                    } else if (selectedValue === "recipe") {
                        setMenu(false); // 레시피 보관함 표시
                    }
                }}
            >
                <option value="ingredient">재료</option>
                <option value="recipe">레시피</option>
            </select>

            {isMenu ? (
                <IngredientMenu ingredients={ingredients} selectIngredients={selectIngredients} setSelectIngredients={setSelectIngredients}/>
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