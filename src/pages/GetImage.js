import React, { useState, useEffect } from "react";
import axios from "axios";

const GetImage = () => {
  const [imageUrl, setImageUrl] = useState('https://oheumwan-image-upload.s3.eu-central-1.amazonaws.com/');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
    const receiver = isIOS ? window : document;

    const handleMessage = (event) => {
      const { isError, filename } = JSON.parse(event.data);

      if (filename) {
        setImageUrl(imageUrl + filename);
        setIsLoading(false);
      }

      setIsError(isError);
    };

    // receiver를 사용하여 플랫폼에 따른 로직을 처리
    receiver.addEventListener('message', handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너를 정리
    return () => {
      receiver.removeEventListener('message', handleMessage);
    };
  }, []);

  // React -> React Native
  // window.ReactNativeWebView.postMessage('Hello from WebView!');
  //
  // React Native -> React (Android)
  // document.addEventListener('message', (event) => {
  //     const receivedData = event.data;
  //     // alert('Received data: ' + receivedData);
  //     setData(receivedData)
  // });
  //
  // React Native -> React (ios)
  // window.addEventListener('message', (event) => {
  //     const data = event.data;
  //     alert('Received data:', data);
  // });

  return (
    <>
      <div> 전송 받은 이미지 경로 </div>
      <div> {imageUrl} </div>
    
      {isLoading ? 
        <h1>...Loading</h1> 
      : 
        <div><img src={imageUrl} /></div>
      }



    </>
  );
};

export default GetImage;
