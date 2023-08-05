import {ingredientsJSON} from "../../utils/ingredients";

const IngredientMenu = ({ingredients, selectIngredients, setSelectIngredients}) => {

    // 이미지를 클릭 시 selectImage 리스트에 추가 또는 삭제
    const Select_Ingredient_handler = (ingredient) => {
        if (selectIngredients.includes(ingredient)) {
            setSelectIngredients(prevIngredients => prevIngredients.filter(item => item !== ingredient));
        } else {
            setSelectIngredients(prevIngredients => [...prevIngredients, ingredient]);
        }
    };

    return (
        <>
            <ul className="grid grid-cols-5 gap-3 px-5 mt-5">
                {ingredients && ingredients.map(([ingredient, quantity]) => {
                    // ingredientsJSON에서 title에 해당하는 항목 찾기
                    const foundIngredient = ingredientsJSON.find(item => item.title === ingredient);

                    return (
                        <li className="flex items-center flex-col" key={ingredient} onClick={() => Select_Ingredient_handler(ingredient)}>
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
    )
}

export default IngredientMenu;