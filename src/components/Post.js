import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Post = ({setModalOpen}) => {
    const navigate = useNavigate();

    const handlerSubmit=(e)=>{
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;
        
        navigate('/community', {state:{ title, content }});
        setModalOpen(false);
    }
    const handleCancel = () => {
        setModalOpen(false);
      };

    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();

    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
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
        <div className="text-xl text-neutral-500 font-lighter mt-5 mb-2 text-center" >New Post</div>
        <form className="mt-3" onSubmit={handlerSubmit}>
        <div className="flex place-content-center">
            <div className="text-center">
                {/* 업로드 된 imgfile 미리보기 */}
            <img
            src={imgFile ? imgFile :``}
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
        <div className="flex flex-col md:flex-row mb-1 items-center">
            <label htmlFor="title" className="w-11/12 flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">
            Title
            <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="제목을 입력해주세요"
                type="text"
                id="title"
                name="title"
            />
            </label>
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
            {/* <img
            src={imgFile ? imgFile :``}
            alt="이미지"
            />
            <label className="pt-3 font-bold text-stone-400" htmlFor="profileImg">이미지 추가
            <input className="hidden"
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
            />
            </label> */}
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