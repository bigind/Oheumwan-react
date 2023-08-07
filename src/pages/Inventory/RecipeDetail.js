import axios from "axios";
import React, { useEffect, useState } from "react";

const RecipeDetail = ({ setRecipeDetail, detailRecipeId }) => {
    const [mainData, setMainData] = useState(null);
    const [recipe, setRecipe] = useState(null);

    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .post(
                "https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/recipe/readrecipe",
                {
                    recipe_id: detailRecipeId,
                }
            )
            .then((res) => {
                console.log(res.data);
                setMainData(JSON.parse(res.data.data));
                setRecipe(JSON.parse(res.data.recipe));
                setLoading(false);
            })
            .catch((err) => {
                setRecipeDetail(false);
                alert("레시피 정보가 존재하지 않습니다!");
            });
    }, [detailRecipeId]);

    return (
        <>
        {isLoading ? (
            <div className={"mt-6 ml-6"}> 페이지를 그리는 중입니다.</div>
            ):(
                <>
                    {mainData && (
                        <div className="ml-6 mr-6">
                            <div className={"mt-10"}>
                                {mainData[2] && (
                                    <img
                                        alt={mainData[1]}
                                        src={mainData[2]}
                                        className="object-cover w-full max-h-40 rounded-lg"
                                    />
                                )}
                                <div className="w-full p-4 bg-white dark:bg-gray-800">
                                    <p className="font-medium text-indigo-500 text-md"></p>
                                    <p className="mb-2 text-xl text-gray-800 dark:text-white font-bold">
                                        {mainData[1]}
                                    </p>
                                </div>
                            </div>
                            <div className={"mt-10 mb-2 text-l"}>[요리 정보]</div>
                            <div className="w-md overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                                <div className={"mt-2"}>
                                    <div className={"ml-6 mb-2 font-bold"}>인분</div>
                                    <div className={"ml-6 mb-4"}>{mainData[3]}</div>
                                    <div className={"ml-6 mb-2 font-bold"}>소요시간</div>
                                    <div className={"ml-6 mb-4"}>{mainData[4]} 분</div>
                                    <div className={"ml-6 mb-2 font-bold"}>재료</div>
                                    <div className={"ml-6 mb-4"}>{mainData[5]} </div>
                                </div>
                            </div>



                            <div className={"mt-10 text-l"}>[조리 방법]</div>
                            {recipe.map((cur) => (
                                <div className="w-md overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                                    <img
                                        alt={cur} src={cur[3]}
                                        className="object-cover w-full max-h-40 rounded-lg"
                                    />
                                    <div className="w-full p-4 bg-white dark:bg-gray-800">
                                        <p className="font-medium text-indigo-500 text-md">
                                        </p>
                                        <p className="mb-2 ml-2 text-xl font-medium text-gray-800 dark:text-white">
                                            {cur[2]}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            <div className="flex max-w-md overflow-hidden mb-16">
                                <button
                                    type="button"
                                    className="flex mt-5 focus:outline-none text-stone-800 bg-white hover:bg-stone-200 border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                                    onClick={() => {
                                        setRecipeDetail(false); // 레시피 추천 화면을 보관함으로 전환
                                    }}
                                >
                                    <span>돌아가기</span>
                                </button>
                            </div>
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default RecipeDetail;
