import {ingredientsJSON} from "../../utils/ingredients";
import axios from "axios";
import React, {useState} from "react";

const IngredientMenu = ({ingredients, selectIngredients, setSelectIngredients, setRecommand, setRecipe}) => {

    const [isLoading, setLoading] = useState(null);

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
                {isLoading ? (
                    <>
                        <button
                            type="button"
                            className="flex mt-auto focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                        >
                            <svg className="h-5 w-5 animate-spin mr-1" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>추천을 받는중입니다...</span>
                        </button>
                    </>
                ) : (
                    <button
                    type="button"
                    className="focus:outline-none text-white bg-black hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => {
                        if(selectIngredients.length === 0) alert("재료를 선택해주세요!")
                        else {
                            setLoading(true);
                            console.log(selectIngredients);
                            axios.post("https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/openai",{
                                ingredient : selectIngredients
                            }).then((res) => {
                                console.log(res.data);
                                setRecipe(res.data.dish);
                                setRecommand(true);
                                setLoading(false);
                            }).catch((err) => {
                                console.log(err);
                                setLoading(false);
                            })
                        }
                    }}
                >
                    레시피 추천
                </button>
                )}
            </div>
        </>
    )
}

export default IngredientMenu;