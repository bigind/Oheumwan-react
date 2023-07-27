import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

const EditProfile=({profileImage}) => {
  const [infoImg,setInfoImg] = useState({profileImage});
  const imgRef = useRef();
  console.log({profileImage});

  const handleImageUpload = (file, fileName) => {
    // setUploadedImages((prevImages) => [...prevImages, file]);
    console.log("Image uploaded:", file);
  };

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setInfoImg(reader.result);
        handleImageUpload(file);
    };

    
};
  
  return (
    <div> 
      {infoImg && <img src={infoImg} className="object-cover w-20 h-20 rounded-full"/> }
      <input className="pb-3" type="file" ref={imgRef}/>
      <br/>
      <button className="rounded-lg border-solid border-neutral-500 border" onClick={saveImgFile}>이미지 변경</button>
    </div>
  );
}

export default EditProfile;

