import React, { useState } from "react";
import {AiOutlineMinusCircle } from "react-icons/ai";
import axios from "axios";
import {ingredientsJSON} from "../../utils/ingredients";


const IngredientCheck = ({ data, setData, setIsLoading }) => {
    const [IngData, setIngData] = useState(data ? JSON.parse(data) : {});
    const [isLoading, setLoading] = useState(false);

    return (
        <>
            
            <div className="flex flex-col justify-center items-center h-screen">
                {(JSON.stringify(IngData) === "{}") ? (
                    <>
                        <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
                            인식된 재료가 없습니다
                        </h2>
                        <button
                            type="button"
                            className="focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2"
                            onClick={() => {
                                window.ReactNativeWebView.postMessage(
                                    JSON.stringify("NonDataExit")
                                );
                                setData(null); // 데이터 값 초기화
                            }}
                        >
                            돌아가기
                        </button>
                    </>
                ): (
                    <>
                        <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
                            인식된 재료가 일치한가요?{" "}
                        </h2>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="overflow-y-auto max-h-96">
                                        <table className="min-w-full text-center">
                                            <thead className="border-b">
                                            <tr className="border-b bg-stone-300 border-stone-200">
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                    재료 이미지
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                    재료명
                                                </th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                                                    수량
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>

                                            {Object.keys(IngData).map((ingredient, index) => {
                                                const matchingIngredient = ingredientsJSON.find(
                                                    (item) => item.title === ingredient
                                                );

                                                return (
                                                    <tr className="border-b bg-gray-50 border-gray-200" key={index}>
                                                        {/* 재료 이미지 */}
                                                        <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap flex">
                                                            <button
                                                                className="mr-3 cursor-default"
                                                            ><AiOutlineMinusCircle onClick={() => {
                                                                const updatedIngData = { ...IngData };
                                                                delete updatedIngData[ingredient];
                                                                setIngData(updatedIngData);
                                                            }} />
                                                            </button>
                                                            <div className="flex items-center justify-center">
                                                                <img
                                                                    src={matchingIngredient ? matchingIngredient.imgSrc : ''}
                                                                    className="w-10 h-5 object-cover"
                                                                    alt="인식된 재료"
                                                                />
                                                            </div>
                                                        </td>
                                                        {/* 재료 */}
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <div>{ingredient}</div>
                                                        </td>
                                                        {/* 수량 */}
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
                                                            <div className="input-number-group flex justify-center items-center">
                                                                <button className="w-full input-number-decrement h-5 w-5 bg-white border border-gray-300 text-xl font-bold rounded" onClick={() => {
                                                                    const updatedIngData = { ...IngData };
                                                                    if(IngData[ingredient] === 1) return;
                                                                    updatedIngData[ingredient] = IngData[ingredient] - 1;
                                                                    setIngData(updatedIngData);
                                                                }}>
                                                                    -
                                                                </button>
                                                                <div className="mr-2 ml-2 num h-5 w-5 border border-gray-300 text-xl flex items-center justify-center">
                                                                    {IngData[ingredient]}
                                                                </div>
                                                                <button className="w-full input-number-increment h-5 w-5 bg-white border border-gray-300 text-xl font-bold rounded" onClick={() =>  {
                                                                    const updatedIngData = { ...IngData };
                                                                    updatedIngData[ingredient] = IngData[ingredient] + 1;
                                                                    setIngData(updatedIngData);
                                                                } }>

                                                                    +
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                            {isLoading ? (
                                <button
                                    type="button"
                                    className="flex mt-auto focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                                >
                                    <svg className="h-5 w-5 animate-spin mr-1" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>잠시만 기다려주세요...</span>
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="mt-auto focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                                        onClick={() => {
                                            setLoading(true);  // 로딩 true
                                            // 서버로 유저의 보관함이으로 재료가 추가되도록 요청
                                            axios.post("https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/ingredient",{
                                                user_id : 1,
                                                ingredients : IngData
                                            })
                                                .then((res) => {
                                                    console.log(JSON.stringify(res.data.body))

                                                    // 앱으로 save 메시지 전송
                                                    window.ReactNativeWebView.postMessage(
                                                        JSON.stringify("save")
                                                    );
                                                })
                                                .catch((err) => {
                                                    // 앱으로 err 메시지 전송
                                                    window.ReactNativeWebView.postMessage(
                                                        JSON.stringify("err")
                                                    );
                                                })
                                            // 값 초기화
                                            setData(null); // 데이터 값 초기화
                                        }
                                        }
                                    >
                                        보관함에 저장
                                    </button>
                                    <button
                                        type="button"
                                        className="focus:outline-none text-stone-800 bg-white hover:bg-stone-200
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2"
                                        onClick={() => {
                                            window.ReactNativeWebView.postMessage(
                                                JSON.stringify("exit")
                                            );
                                            setData(null); // 데이터 값 초기화
                                        }}
                                    >
                                        돌아가기
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                    )
                }
            </div>
        </>
    );
};

export default IngredientCheck;