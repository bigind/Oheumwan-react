import React, {Component, useState} from 'react';
import { FiHeart, FiMessageCircle, FiMoreHorizontal } from 'react-icons/fi';
// import Popup from './Popup';

const Card = ({src, likes, content}) => {
    const images = {
        '1': process.env.PUBLIC_URL + '/img/so1.jpg',
        '2': process.env.PUBLIC_URL + '/img/so2.jpg',
        '3': process.env.PUBLIC_URL + '/img/so3.jpg'
    }

    // const [ispopup, setIsPopup] = useState(false);
    
    // const handlePopup = () => {
    //     return(
    //         setIsPopup(!ispopup)
    //     );
    // }



    return (
        <>
        <div>
        <div className='pt-2'>
            <div className='flex justify-between'>
            <div 
            className='flex flex-row ml-1 mb-2'
            >
            <img src={"img/sohee.jpg"} alt="xeesoxee" 
            className='object-cover w-10 h-10 rounded-full'/>
            
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, justifyContent: 'center'}}>
                    <span style={{fontWeight: '500'}}>xeesoxee</span>
                    <span>2023년 7월 11일</span>
                </div>
                </div>
                <FiMoreHorizontal className='mr-3 mt-3 cursor-pointer'/>
            </div>
            {/* {ispopup ? <Popup handlePopup={handlePopup} /> : "" } */}
        </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <img src={src ? src : images['1']} alt="xeesoxee" style={{ minHeight:200 , width: '100%', flex: 1 }} />
        </div>
        <div style={{ height: 45 , marginLeft: 10}}>
            <button>
                <FiHeart className='text-black' />
            </button>
            <button className='p-3'>
                <FiMessageCircle className='text-black' />
            </button>
        </div>
        <div className='font-black ml-2 h-7'>
            <span>좋아요 {likes}개</span>
        </div>
        <div className='pb-5'>
        <span>
        <span className='font-black ml-2'>xeesoxee </span>{content}</span>
        </div>
        <hr/>
        </>
        );
    };
 
export default Card;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};