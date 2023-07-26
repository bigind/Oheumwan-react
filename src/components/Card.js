import React, {Component, useState, useEffect} from 'react';
import { FiHeart, FiMessageCircle, FiMoreHorizontal } from 'react-icons/fi';
import Popup from './Popup';
import Edit from './Edit';
import axios from 'axios';

const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/community`;

const Card = ({src, likes, content,handlerRemove, username}) => {

    const images = {
        '1': process.env.PUBLIC_URL + '/img/so1.jpg',
        '2': process.env.PUBLIC_URL + '/img/so2.jpg',
        '3': process.env.PUBLIC_URL + '/img/so3.jpg'
    }

    const [popupOpen, setPopupOpen] = useState(false);
    const [edited, setEdited] = useState({});
    const [editedContent, setEditedContent] = useState(content);
    // const [like, setLike] = useState(false)

    useEffect(() => {
      setEdited({ content });
    }, [content]);

    // useEffect(async () => {
    //   const fetchData = async () => {
    //     const res = await axios.get()
    //     if (res.data.type === 'liked') setLike(true)
    //   }
    //   fetchData()
    // }, []);

    // const toggleLike = async (e) => {
    //   const res = await axios.post() // [POST] 사용자가 좋아요를 누름 -> DB 갱신
    //   setLike(!like)
    // }

    const showPopup = () => {
        setPopupOpen(true);
    }
    
    const [isEditOpen, setEditOpen] = useState(false);

    const handleEditOpen = () => {
        setEditOpen(true);
        setEdited({content});
    };

    const handleEditCancel = () => {
      setEditOpen(false);
    };

    const handlerEditSubmit = (edited) => {
        console.log(edited);
        axios
          .put(apiEndpoint, {
            post_id: '345',
            author_id: '1',
            new_content: edited,
            new_image_path: 'image_path'
          })
          .then((res) => {
            console.log(res.data);
            setEditedContent(edited);
            setEditOpen(false); // 모달 닫기
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const handlerEdit = (item) => {
        setEditOpen(true);
        handlerEdit(item); // prop으로 받은 'handlerEdit' 함수 호출     
      };
    
     
    

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
                    <span style={{fontWeight: '500'}}>{username}</span>
                    <span>2023년 7월 11일</span>
                </div>
                </div>
                {!popupOpen && (
                    // <FiMoreHorizontal className='mr-3 mt-3 cursor-pointer' onClick={showPopup}/>
                    <button onClick={handleEditOpen}>Edit</button>
                    )}
            </div>
            {popupOpen && (
                    <Popup setPopupOpen={setPopupOpen} />
               
        )} 
        {isEditOpen && (
        <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
            <Edit selectedData={edited} handlerCancel={handleEditCancel} handlerEditSubmit={handlerEditSubmit} handlerRemove={handlerRemove} />
          </div>
        </div>
      )}
        </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <img src={src ? src : images['1']} alt="image" style={{ minHeight:200 , width: '100%', flex: 1 }} />
        </div>
        <div style={{ height: 45 , marginLeft: 10}}>
            <button>
                <FiHeart className='text-black'/>
                {/* <HeartButton like={like} onClick={toggleLike}/> */}
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
        <span className='font-black ml-2'>{username}</span>{editedContent}</span>
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
