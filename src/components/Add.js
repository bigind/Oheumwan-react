import React, {useState} from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Add = ({handleAddCancel}) => {
    const [ingredientCount, setIngredientCount] = useState(1);

    const handleAddButtonClick = () => {
    setIngredientCount((prevCount) => prevCount + 1);
    };

    const handleRemoveButtonClick = () => {
        setIngredientCount((prevCount) => prevCount - 1);
      };

    const onCancel = () => {
        handleAddCancel();
    }


    return(
    <div
        className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70"
        >
            <div className="bg-white rounded shadow-lg w-10/12 h-3/5 md:w-1/3">
                <div className="border-b px-4 py-2 flex justify-center items-center">
                    <h3 className="font-bold text-lg">재료 추가</h3>
                </div>
                <form className="h-full">
                {[...Array(ingredientCount)].map((_, index) => (
            <div key={index} className="p-4 border-2">
              <div className="font-bold flex flex-row justify-center items-center">
                {index === ingredientCount - 1 ? (
                  <AiOutlinePlusCircle onClick={handleAddButtonClick} />
                ) : (
                  <AiOutlineMinusCircle onClick={handleRemoveButtonClick} />
                )}
                <input
                  className="text-gray-700 border-2 border-gray-100"
                  type="text"
                  name="content"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button
              type="button"
              className="bg-neutral-400 hover:bg-neutral-500 px-3 py-1 rounded text-white mr-1 close-modal"
              onClick={onCancel}
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-neutral-400 hover:bg-neutral-500 px-3 py-1 rounded text-white"
            >
              확인
            </button>
          </div>
        </form>
            </div>
        </div>
    );
} 
export default Add;