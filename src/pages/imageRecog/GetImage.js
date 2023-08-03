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
    receiver.addEventListener("message", handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리
    return () => {
      receiver.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
      <>
        {/* 이미지 서버에서 처리될 때 까지 로딩 */}
        {isLoading ? (
            <ImageLoading />
        ) : (
            <IngredientCheck data={data} setData={setData} setIsLoading={setIsLoading}></IngredientCheck>
        )}
      </>
  );
};

export default GetImage;
