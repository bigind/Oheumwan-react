import React from "react";

const Popup = (props) => {
    return(
        <div>
                    <div onClick={()=>props.handlePopup()}>
                    {/* <CloseIcon /> */}
                    </div>
                    <ul>
                        <li>수정하기</li>
                        <li>삭제하기</li>
                    </ul>
                </div>
    );
}

export default Popup ;