import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../components/Add";
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineMinus } from "react-icons/ai";


const IngredientCheck = ({ data, setData, setIsLoading }) => {
    const [IngData, setIngData] = useState(data ? JSON.parse(data) : {});

    const [sendData, setSendData] = useState([]);


    const ingredientsJSON = [
        {
            "id": 0,
            "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT780ihzuR1_ijb1ba0zFXCNcxA3tw4h5nwvQantmC4IGtjiz87hG412pViS7T2d2EnQ7w&usqp=CAU",
            "title": "양배추",
            "checked": true
        },
        {
            "id": 1,
            "imgSrc": "https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg",
            "title": "당근",
            "checked": true
        },
        {
            "id": 2,
            "imgSrc": "https://media.istockphoto.com/id/1282866808/ko/%EC%82%AC%EC%A7%84/%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%83%9D-%EB%8B%AD%EA%B3%A0%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=R2M6I-Jx6lmJMS67aDJIptl5Srs34I493CSOoN1GIR0=",
            "title": "닭고기",
            "checked": true
        },
        {
            "id": 3,
            "imgSrc": "https://t1.daumcdn.net/cfile/tistory/1337644450067F2301",
            "title": "오이",
            "checked": true
        },
        {
            "id": 4,
            "imgSrc": "https://www.ktong.kr/wp-content/uploads/2020/06/%EA%B3%84%EB%9E%80-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EC%9D%98-%EB%86%80%EB%9D%BC%EC%9A%B4-%ED%9A%A8%EA%B3%BC.jpg",
            "title": "계란",
            "checked": true
        },
        {
            "id": 5,
            "imgSrc": "https://www.fsnews.co.kr/news/photo/202207/46085_38609_3827.jpg",
            "title": "마늘",
            "checked": true
        },
        {
            "id": 6,
            "imgSrc": "https://dimg.donga.com/wps/NEWS/IMAGE/2022/09/14/115451847.2.jpg",
            "title": "버섯",
            "checked": true
        },
        {
            "id": 7,
            "imgSrc": "https://cdn.kormedi.com/wp-content/uploads/2022/07/gettyimages-1312497207.jpg",
            "title": "양파",
            "checked": true
        },
        {
            "id": 8,
            "imgSrc": "https://cdn.huffingtonpost.kr/news/photo/201601/21945_42769.jpeg",
            "title": "감자",
            "checked": true
        },
        {
            "id": 9,
            "imgSrc": "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/05/19/20190519000031_0.jpg",
            "title": "애호박",
            "checked": true
        }
    ];


    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
                    인식된 재료가 일치한가요?{" "}
                </h2>
                {/* <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                    <div>{JSON.stringify(IngData)}</div>
                </h2> */}
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
                                                갯수
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
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <div>{ingredient}</div>
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex">
                                                        <div className="input-number-group flex justify-center items-center">
                                                            <button className="w-full input-number-decrement h-5 w-5 bg-white border border-gray-300 text-xl font-bold rounded" onClick={() => { }}>
                                                                -
                                                            </button>
                                                            <div className="num h-5 w-5 border border-gray-300 text-xl flex items-center justify-center">
                                                                {IngData[ingredient]}
                                                            </div>
                                                            <button className="input-number-increment h-5 w-5 bg-white border border-gray-300 text-xl font-bold rounded" onClick={() => { }}>
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
                    <button
                        type="button"
                        className="mt-auto focus:outline-none text-stone-800 bg-white hover:bg-stone-200 
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2 "
                        onClick={() => {
                            window.ReactNativeWebView.postMessage(
                                JSON.stringify("save")
                            );
                            setIsLoading(true); // 로딩을 다시 표시
                            setData(null); // 데이터 값 초기화
                        }}
                    >
                        보관함에 저장
                    </button>
                    <button
                        type="button"
                        className="focus:outline-none text-stone-800 bg-white hover:bg-stone-200 
                        border border-2 border-solid focus:ring-4 focus:ring-stone-300 font-medium rounded-lg text-xl px-2 py-3 mr-2 mb-2"
                        onClick={() => {
                            window.ReactNativeWebView.postMessage(
                                JSON.stringify("webviewExit")
                            );
                            setIsLoading(true); // 로딩을 다시 표시
                            setData(null); // 데이터 값 초기화
                        }}
                    >
                        돌아가기
                    </button>
                </div>
            </div>
        </>
    );
};

export default IngredientCheck;