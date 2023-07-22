import React,{useState} from "react";
import Edit from "./Edit";

const Popup = ({ setPopupOpen }) => {

    const [editmodalOn, setEditModalOn] = useState(false);

    const showEdit = () => {
        setEditModalOn(true);
    }

    // 모달 끄기 
    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="container w-40 h-20 z-50 bg-white border-solid border-2 border-slate-200 rounded-lg absolute top-1/5 -right-20 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col justify-center">
            <button className="close absolute top-2 right-5" onClick={closePopup}>
                X
            </button>
            <div>
            {/* <p className="pb-2">수정하기</p> */}
            {!editmodalOn && (
                <p className="pb-2" onClick={showEdit}>수정하기</p>)}
            <hr/>
            <p className="pt-2">삭제하기</p>
            </div>
            {editmodalOn && (
            <Edit setEditModalOn={setEditModalOn} 
            />
            )}
        </div>
    );
}
export default Popup;