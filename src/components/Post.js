import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({setModalOpen, handleImageUpload, handlePostSubmit}) => {
    const navigate = useNavigate();

    const handlerSubmit=(e)=>{
        e.preventDefault();
        const content = e.target.elements.content.value;
        handlePostSubmit(content);
        
        navigate('/community', {state:{ content }});
        setModalOpen(false);
    }
    const handleCancel = () => {
        setModalOpen(false);
      };

    const [imgFile, setImgFile] = useState(null);
    const imgRef = useRef();

    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
            handleImageUpload(file);
        };

        
    };


    return (
    <div className="w-full h-screen">
        <div className="text-right">
            {/* 업로드 창 닫기 */}
        <button
          className="w-1/12 pt-3"
          onClick={handleCancel}
          aria-label="Cancel"
        >
          ❌
        </button>
      </div>
        <div className="text-xl text-neutral-500 font-lighter mt-5 mb-2 text-center pb-5" >New Post</div>
        <form className="mt-3" onSubmit={handlerSubmit}>
        <div className="flex place-content-center">
            <div className="text-center grid place-items-center w-2/5">
                {/* 업로드 된 imgfile 미리보기 */}
            <img className="text-center w-2/5"
            src={imgFile ? imgFile :`img/default-img.png`}
            alt="이미지"
            />
            <label className="font-bold text-stone-400" htmlFor="profileImg">이미지 추가
            <input className="hidden"
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
            />
            </label>
            </div>
        <div className="flex flex-col items-center w-3/5">
            <label htmlFor="content" className="w-11/12 flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">
            Content
            <textarea
                className="w-full h-40 py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="내용을 입력해주세요"
                type="text"
                id="content"
                name="content"
            />
            </label>

        </div>
        </div>
        
        <div className="text-center">
        <button
        className="bg-stone-400 py-2 text-center px-10 md:px-12 md-py-2 text-white rounded text-xl md:text-base mt-4"
        type="submit"
        >저장</button>
        </div>
     </form>
    </div>
    );
}

export default Post ;