import React, {useState, useEffect} from "react";

const Edit = ({selectedData, handlerCancel, handlerEditSubmit, handlerRemove}) => {


    const [edited, setEdited] = useState(selectedData.content);
    
    const onCancel = () => {
        handlerCancel();
    }

    const onEditChange = (e) => {
        setEdited(e.target.value);
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handlerEditSubmit(edited);
        console.log(edited);
        // handlerEditSubmit({ ...selectedData, content: edited });
    }

    const onDelete = () => {
        handlerRemove(selectedData.post_id);
         onCancel();
    }
   

    return(
        <div
        className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70"
        >
            <div className="bg-white rounded shadow-lg w-10/12 h-3/5 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-center items-center">
                    <h3 className="font-bold text-lg">Edit Content</h3>
                    <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
                </div>
                <form className="h-full" onSubmit={onSubmitEdit}>
                    <div className="p-4 border-2">
                        <div className="font-bold">Post No.{selectedData.post_id} </div>
                        <div className="font-bold">content: {""}<input className="text-gray-700 border-2 border-gray-100" type="text" name="content" value={edited} onChange={onEditChange}/></div>
                    </div>
                    <div className="flex justify-end items-center w-100 border-t p-3">
                        <button className="bg-neutral-400 hover:bg-neutral-500 px-3 py-1 rounded text-white mr-1 close-modal" onClick={onCancel}>취소</button>
                        <button type="submit" className="bg-neutral-400 hover:bg-neutral-500 px-3 py-1 rounded text-white mr-1" onClick={onSubmitEdit}>수정</button>
                        <button type="submit" className="bg-neutral-400 hover:bg-neutral-500 px-3 py-1 rounded text-white" onClick={onDelete}>삭제</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Edit;