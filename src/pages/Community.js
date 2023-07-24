import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Card from '../components/Card';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/community`;

const username = 'user1'

const Community = () => {
  const location = useLocation();

  const { content: initialContent } = location.state || {};
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [contents, setContents] = useState([]);
  const [post, setPost] = useState([]); // 전체 글
  const [selected, setSelected] = useState(''); // 선택된 글
  const [editmodalOn, setEditModalOn] = useState(false);
  const NextId = useRef();
  const [isLoading, setIsLoading] = useState(true); // 데이터 불러오기 전에 렌더링되어서 로딩변수 추가 
  let fileName = '';
  if (uploadedImages.length > 0) {
    fileName = uploadedImages[uploadedImages.length - 1].name;
  }

  useEffect(() => {
    axios.get(`${apiEndpoint}?username=${username}`)
      .then(res => {
        const fetchedData = JSON.parse(res.data.body);
        console.log(fetchedData);
        setPost(fetchedData);
      })
      .catch(err => console.log(err))
  }, [])



  useEffect(() => {
    axios.post(apiEndpoint, {
      username: "user1",
      content: initialContent,
      image_path: fileName
    }).then(res => {

      const jsonData = JSON.parse(res.config.data);
      // console.log(res);
      //  console.log(jsonData);
      // NextId.current = jsonData.length > 0 ? Math.max(...jsonData.map(post => post.post_id.current)) + 1 : 1;
      // console.log(NextId);

    }).catch(err => console.log(err))
  }, [uploadedImages, initialContent]);



  const handleImageUpload = (file, fileName) => {
    setUploadedImages((prevImages) => [...prevImages, file]);
    setContents((prevContents) => [...prevContents, fileName]);
  };

  const handleContentChange = (content) => {
    setContents((prevContents) => [...prevContents, content]);
  };

  const handlePostSubmit = (content) => {
    setContents((prevContents) => [...prevContents, content]);

    setModalOpen(false);
  };


  return (
    <div className='bg-white items-center flex-1'>
      <div className='w-full'>
        <div className='text-right'>
          {!modalOpen && (
            <button className='w-1/12 pt-3' onClick={() => setModalOpen(true)}>✏️</button>)}
        </div>
      </div>
      {modalOpen && (
        <Post
          setModalOpen={setModalOpen}
          handleImageUpload={handleImageUpload}
          handleContentChange={handleContentChange}
          handlePostSubmit={handlePostSubmit}
        />
      )}

      <div className='text-left'>
        {!modalOpen && (
          <div>
            {post.map((item) => ( //get으로 가져온 D 출력
              <Card
                key={item.post_id}
                src={item.image_path} 
                likes="0"
                content={item.content} 
              />
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Community;



