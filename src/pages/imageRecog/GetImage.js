import React, { useState, useEffect } from "react";
import ImageLoading from "./ImageLoding";
import IngredientCheck from "./IngredientCheck";

const GetImage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // 앱에서 응답이 오기를 기다리다가 응답이 오면 처리
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const receiver = isIOS ? window : document;

    // 15초 후에도 응답이 없으면,
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);

    const handleMessage = (event) => {
      const data = JSON.parse(event.data);

      if (data) {
        setIsLoading(false);
        setData(data);
      }
    };

    // receiver를 사용하여 플랫폼에 따른 로직을 처리
    receiver.addEventListener('message', handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리
    return () => {
      receiver.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {/* 이미지 서버에서 처리될 때 까지 로딩 */}
      {isLoading ?
          <ImageLoading></ImageLoading>
      :
          <div className="flex flex-col justify-center items-center h-screen">
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">인식된 재료가 일치한가요? </h2>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{data}</h2>
            <div>
              <button type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                보관함에 저장
              </button>
              <button type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                수정
              </button>
              <button type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={() => {
                        window.ReactNativeWebView.postMessage(JSON.stringify("웹뷰 종료!"));
                        setIsLoading(true); // 로딩을 다시 표시
                        setData(null);  // 데이터 값 초기화
                      }}>
                돌아가기
              </button>
            </div>
            <div>

            </div>
          </div>
      }
    </>
  );
};

export default GetImage;
