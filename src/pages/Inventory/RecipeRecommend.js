import React, {useEffect, useState} from "react";
import axios from "axios";
import {setSelectionRange} from "@testing-library/user-event/dist/utils";
import RecipeDetail from "./RecipeDetail";

const RecipeRecommend = ({recipe, setRecommand, selectIngredients}) => {

    const [userBaseRecipes, setRecipes] = useState([]); // 사용가 기반 추천 레시피 리스트
    const [selectRecipes, setSelectRecipes] = useState([]);
    const [detailRecipeId, setDetailRecipeId] = useState();

    // 화면 컨트롤
    const [isRecipeDetail, setRecipeDetail] = useState(false); // 레시피 디테일 화면 트리거

    // 버튼 컨트롤
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [button3, setButton3] = useState(false);

    useEffect(() => {
        // 사용자 기반 레시피 가져오기
        axios.post("https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/recipe",{
            ingredient : selectIngredients,
        })
            .then((res) => {
                console.log(JSON.parse(res.data.body));
                setRecipes(JSON.parse(res.data.body));
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleSelectRecipes = (data) => {
        const updatedSelectRecipes = [...selectRecipes];
        const index = updatedSelectRecipes.indexOf(data);

        if (index !== -1) {
            // data 값이 이미 selectRecipes에 있으면 제거
            updatedSelectRecipes.splice(index, 1);
        } else {
            // data 값이 selectRecipes에 없으면 추가
            updatedSelectRecipes.push(data);
        }

        setSelectRecipes(updatedSelectRecipes);
    };

    return (
        <>
        {isRecipeDetail ? (
            <>
                <RecipeDetail setRecipeDetail={setRecipeDetail} detailRecipeId={detailRecipeId}></RecipeDetail>
            </>
        ) : ( <>
                <div className="ml-6 mr-6 pt-5">
                    <div className={"mb-1 text-xl"}>AI 추천</div>
                    <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                        <h3 className="w-1/3 bg-cover bg-landscape">
                            <img src={"https://i.namu.wiki/i/_cLeYQStb5Xf8h6vC4ZtRoGFvsF1-rb9wqUMJ9pS510fYeJCGOnh-CQ0A0n9YNHbZ5Roi4WX3NB5RTPdYmhJyg.webp"}/>
                        </h3>
                        <div className="w-2/3 p-4">
                            <h3 className="text-2xl font-bold text-gray-900">
                                {recipe}
                            </h3>
                            <div className="flex justify-between mt-3 item-center">
                                <button className={`px-3 py-2 text-xs font-bold text-white uppercase ${button1 ? "bg-pink-500" : "bg-gray-800"} rounded`}
                                        onClick={() => { setButton1(!button1); handleSelectRecipes(JSON.parse(recipe));}}>
                                    {button1 ? "추가됨" : "보관함 추가"}
                                </button>
                                <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                                        onClick={() => {setRecipeDetail(true); setDetailRecipeId(JSON.parse(recipe))}}>
                                    레시피확인
                                </button>
                            </div>
                        </div>
                    </div>
                    {userBaseRecipes.length === 0 ? (<></>) : (
                        <>
                            <div className={"mt-10 text-xl"}>사용자 기반 추천</div>
                            <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                                <h3 className="w-1/3 bg-cover bg-landscape">
                                    <img src={userBaseRecipes[0][2]}/>
                                </h3>
                                <div className="w-2/3 p-4">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {userBaseRecipes[0][1]}
                                    </h3>
                                    <div className="flex justify-between mt-3 item-center">
                                        <button className={`px-3 py-2 text-xs font-bold text-white uppercase ${button2 ? "bg-pink-500" : "bg-gray-800"} rounded`}
                                                onClick={() => {setButton2(!button2); handleSelectRecipes(userBaseRecipes[0][0])}}>
                                            {button2 ? "추가됨" : "보관함 추가"}
                                        </button>
                                        <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                                                onClick={() => {setRecipeDetail(true); setDetailRecipeId(userBaseRecipes[0][0]);}}>
                                            레시피확인
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mt-5">
                                <h3 className="w-1/3 bg-cover bg-landscape">
                                    <img src={userBaseRecipes[1][2]}/>
                                </h3>
                                <div className="w-2/3 p-4">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {userBaseRecipes[1][1]}
                                    </h3>
                                    <div className="flex justify-between mt-3 item-center">
                                        <button className={`px-3 py-2 text-xs font-bold text-white uppercase ${button3 ? "bg-pink-500" : "bg-gray-800"} rounded`}
                                                onClick={() => {setButton3(!button3); handleSelectRecipes(userBaseRecipes[1][0])}}>
                                            {button3 ? "추가됨" : "보관함 추가"}
                                        </button>
                                        <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded"
                                                onClick={() => {setRecipeDetail(true); setDetailRecipeId(userBaseRecipes[1][0]);}}>
                                            레시피확인
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex max-w-md overflow-hidden">
                        <button
                            type="button"
                            className="flex mt-5 focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                            onClick={() => {
                                setRecommand(false);  // 레시피 추천 화면을 보관함으로 전환

                                console.log(selectRecipes);
                                if((selectRecipes.length === 0)) { }
                                else(
                                    axios.post("https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/recipe/addrecipes", {
                                        user_id : 1,
                                        data : selectRecipes,
                                    }).then((res) => {
                                        console.log(res.data)
                                    })
                                )
                            }}
                        >
                            <span>돌아가기</span>
                        </button>
                    </div>
                </div>
            </>

        )}
        </>
    )
}

export default RecipeRecommend;