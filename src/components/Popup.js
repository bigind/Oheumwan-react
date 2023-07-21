const Popup = ({ setPopupOpen}) => {
    // 모달 끄기 
    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className="container w-300 h-200 z-50 bg-slate-100 border-1 border-black rounded-lg absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <button className="close absolute right-10" onClick={closePopup}>
                X
            </button>
            <div>
            <p>수정하기</p>
            <hr/>
            <p>삭제하기</p>
            </div>
        </div>
    );
}
export default Popup;