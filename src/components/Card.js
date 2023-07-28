import React, { Component, useState, useEffect } from 'react';
import { FiHeart} from 'react-icons/fi';
import {FaComment,FaRegComment} from 'react-icons/fa'
import Edit from './Edit';
import CommentList from './CommentList';
import axios from 'axios';

const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/community`;

const Card = ({ src, likes, content, handlerRemove, username }) => {

  const images = {
    '1': process.env.PUBLIC_URL + '/img/so1.jpg',
    '2': process.env.PUBLIC_URL + '/img/so2.jpg',
    '3': process.env.PUBLIC_URL + '/img/so3.jpg'
  }

  const [popupOpen, setPopupOpen] = useState(false);
  const [edited, setEdited] = useState({});
  const [editedContent, setEditedContent] = useState(content);
  const [isCommentListOpen, setCommentListOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [cardComments, setCardComments] = useState([]);
 

  useEffect(() => {
    setEdited({ content });
  }, [content]);

  const [isEditOpen, setEditOpen] = useState(false);

  const handleEditOpen = () => {
    setEditOpen(true);
    setEdited({ content });
  };

  const handleEditCancel = () => {
    setEditOpen(false);
  };

  // 게시글 수정 버튼 동작 핸들러
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

  const toggleCommentList = () => {
    setCommentListOpen((prevState) => !prevState);
  }

  const getButtonIcon = () => {
    return isCommentListOpen ? <FaComment /> : <FaRegComment />;
  };

  const handlerCommentPost = () => {
    if (comment.trim().length > 0)
     {
      const copy = [...cardComments];
      copy.push(comment);
      setCardComments(copy);
      setComment('');
    }
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
                className='object-cover w-10 h-10 rounded-full' />

              <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, justifyContent: 'center' }}>
                <span style={{ fontWeight: '500' }}>{username}</span>
                <span>2023년 7월 11일</span>
              </div>
            </div>
            {!popupOpen && (
              <button onClick={handleEditOpen}>Edit</button>
            )}
          </div>
          {isEditOpen && (
            <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
              <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                <Edit selectedData={edited} handlerCancel={handleEditCancel} handlerEditSubmit={handlerEditSubmit} handlerRemove={handlerRemove} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img src={src ? src : images['1']} alt="image" style={{ minHeight: 200, width: '100%', flex: 1 }} />
      </div>
      <div style={{ height: 45, marginLeft: 10 }}>
        {/* 댓글버튼 클릭 시 색이 채워지며 commentList출력 */}
        <button>
          <FiHeart className='text-black' />
        </button>
        <button onClick={toggleCommentList} className='p-3'>
           {getButtonIcon()}
        </button>
       </div>
      
      <div className='font-black ml-2 h-7'>
        <span>좋아요 {likes}개</span>
      </div>
      <div className='pb-5'>
        <span>
          <span className='font-black ml-2 pr-3'>{username}</span>{editedContent}</span>
      </div>
      <div className='ml-2'>
        {/* 버튼 클릭시 토글방식으로 댓글창 출력 */}
      {isCommentListOpen && (
        <>
        {cardComments.map((commentArr,i) => {
          return(
            <CommentList
            username={username}
            userComment={commentArr}
            key = {i} />
          )
        })}
        <input className="border border-2 border-solid w-11/12" type='text' placeholder='상대방을 배려하며 소통합시다 :>'
        onChange={e=> {
        setComment(e.target.value)}}
      />
      <button onClick={handlerCommentPost}
       >입력</button>
        </>)}
      </div>
      
      <hr />
    </>
  );
};

export default Card;