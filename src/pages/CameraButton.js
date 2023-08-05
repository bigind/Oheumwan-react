import {RiImageAddFill} from "react-icons/ri"
import {BiSolidCameraPlus} from "react-icons/bi"


const CameraButton = () => {
    return (
        <div className="items-center justify-center flex flex-col" style={{ backgroundImage: 'url(./img/refrigerator.jpg)', height: '100vh', width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <button className="bg-stone-600 hover:bg-stone-800 text-white text-2xl font-bold py-2 px-4 rounded inline-flex items-center" style={{ width: '300px' }}
                    onClick={() => window.ReactNativeWebView.postMessage(
                        JSON.stringify("camera")
                    )}>
                {/* <BiSolidCameraPlus className="w-16 h-8 mr-2"/> */}
                <div className="flex items-center justify-center w-full h-10 mb-1"> {/* 추가 */}
                    <BiSolidCameraPlus className="pr-2 w-16 h-8" />
                    <span>재료 촬영</span>
                </div>
            </button>
            <div className="pb-8"/>
            <button className="bg-stone-600 hover:bg-stone-800 text-white text-2xl font-bold py-2 px-4 rounded inline-flex items-center" style={{ width: '300px' }}
                    onClick={() => window.ReactNativeWebView.postMessage(
                        JSON.stringify("gallery")
                    )}>
                <div className="flex items-center justify-center w-full h-10 mb-1"> {/* 추가 */}
                    <RiImageAddFill className="pr-1 w-16 h-8" />
                    <span>재료 이미지</span>
                </div>
            </button>
        </div>
    );
}

export default CameraButton;