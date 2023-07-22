import React, {useState} from "react";

const Edit = ({selectedData, handlerCancel, handlerEditSubmit}) => {
    const [edited, setEdited] = useState(selectedData);
 

    const onCancel = () => {
        handlerCancel();
    }

    const onEditChange = (e) => {
        // setEdited({
        //     ...edited,
        //     [e.target.name]: e.target.value
        // });
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();
        handlerEditSubmit(edited);
        
    }

    return(
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
            <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-center items-center">
                    <h3 className="font-bold text-lg">Edit Content</h3>
                    <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
                </div>
                <form onSubmit={onSubmitEdit}>
                    <div className="p-4 border-2">
                        <div className="font-bold">post no. </div>
                        <div className="font-bold">content: <input className="text-gray-700 border-2 border-gray-100" type="text" name="name" value={edited} onChange={onEditChange} /></div>
                    </div>
                    <div className="flex justify-end items-center w-100 border-t p-3">
                        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={onCancel}>취소</button>
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={onSubmitEdit}>수정</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Edit;