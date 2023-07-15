import React, { useState, useEffect } from "react";

const GetImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const handleMessage = (event) => {
      const message = event.data;
      if (message.type === 'imageData') {
        setImageData(message.data);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {imageData}
    </>
  );
};

export default GetImage;
