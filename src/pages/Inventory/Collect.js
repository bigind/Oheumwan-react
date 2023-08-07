import {useEffect, useState} from "react";
import axios from "axios";
import {ingredientsJSON} from "../../utils/ingredients";
import IngredientMenu from "./IngredientMenu";
import RecipeRecommend from "./RecipeRecommend";
import RecipeMenu from "./RecipeMenu";

const Collect = () => {

    // 재료 관련 상태
    const [ingredients, setIngredients] = useState([]);  // 서버에서 가져온 유저의 재료
    const [selectIngredients, setSelectIngredients] = useState([]);  // 사용자가 선택한 재료 리스트

    // 레시피 관련 상태
    const [recipe, setRecipe] = useState(null);  // 추천 받은 레시피 리스트

    // 로딩, 메뉴 트리거 관련 상태
    const [isMenu, setMenu] = useState(true);
    const [isLoading, setLoading] = useState(false);  //
    const [isRecommand, setRecommand] = useState(false);
    // const [isRecipeDetail, setRecipeDetail] = useState(false); // 레시피 디테일 트리거
    

    useEffect(() => {
        setLoading(true);
        axios.get('https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/ingredient?user_id=1')
            .then((res) => {
                const data = JSON.parse(res.data.body);
                console.log(data.ingredients);
                const ingredientsArray = Object.entries(data.ingredients);
                setIngredients(ingredientsArray);
                setLoading(false);
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
            {isRecommand ? (<></>) : (
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
            )}


            {/* 메뉴 트리거 true = 재료, false = 레시피 */}
            {isMenu ? (
                <>
                    {isRecommand ? (
                        <>
                            {/* 레시피 추천 페이지 */}
                            <RecipeRecommend recipe={recipe} selectIngredients={selectIngredients} setRecommand={setRecommand} />
                        </>
                    ):(
                        <>
                            {isLoading ? (
                                <div className="my-4 ml-5 pt-10">
                                    재료를 가져오는 중입니다...
                                </div>
                            ) : (
                                <>
                                    {/* 재료 목록 */}
                                    <IngredientMenu ingredients={ingredients} selectIngredients={selectIngredients} setSelectIngredients={setSelectIngredients} setRecipe={setRecipe} setRecommand={setRecommand}/>
                                </>
                            )}

                        </>
                    )}
                </>
            ) : (
                <RecipeMenu/>
            ) }
        </>
    );
};

export default Collect;