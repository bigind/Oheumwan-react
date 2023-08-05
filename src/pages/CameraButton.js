import {RiImageAddFill} from "react-icons/ri"
import {BiSolidCameraPlus} from "react-icons/bi"


const CameraButton = () => {
    return (
        <div className="pt-40 items-center justify-start flex flex-col" style={{ backgroundImage: 'url(./img/refrigerator.jpg)', height: '100vh', width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <button className="bg-stone-300 hover:bg-stone-400 text-stone-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <BiSolidCameraPlus className="w-8 h-8 mr-2"/>
                <span>재료 촬영</span>
            </button>
            <div className="pb-8"/>
            <button className="bg-stone-300 hover:bg-stone-400 text-stone-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <RiImageAddFill className="w-8 h-8 mr-2"/>
                <span>재료 이미지</span>
            </button>
        </div>
    );
}

export default CameraButton;