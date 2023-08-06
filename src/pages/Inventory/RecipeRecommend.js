import React from "react";

const RecipeRecommend = ({recipe, setRecommand}) => {

    return (
        <>
            <div className="my-4 ml-6 mr-6 pt-10">
                <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
                    <h3 className="w-1/3 bg-cover bg-landscape">
                        AI 추천!
                    </h3>
                    <div className="w-2/3 p-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            {recipe}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
                        </p>
                        <div className="flex justify-between mt-3 item-center">
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                찜하기
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                재료구매
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                레시피확인
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mt-10">
                    <h3 className="w-1/3 bg-cover bg-landscape">
                        사용자 기반 추천
                    </h3>
                    <div className="w-2/3 p-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            레시피~~
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
                        </p>
                        <div className="flex justify-between mt-3 item-center">
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                찜하기
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                재료구매
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                레시피확인
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg mt-10">
                    <h3 className="w-1/3 bg-cover bg-landscape">
                        사용자 기반 추천
                    </h3>
                    <div className="w-2/3 p-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            레시피~~
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
                        </p>
                        <div className="flex justify-between mt-3 item-center">
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                찜하기
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                재료구매
                            </button>
                            <button className="px-3 py-2 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                                레시피확인
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex max-w-md overflow-hidden">
                    <button
                        type="button"
                        className="flex mt-5 focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                        onClick={() => {setRecommand(false)}}
                    >
                        <span>돌아가기</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default RecipeRecommend;