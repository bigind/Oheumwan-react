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
  const [selected, setSelected] = useState(null); // 선택된 글
  const [editmodalOn, setEditModalOn] = useState(false); //edit modal
  const NextId = useRef();
  let fileName = '';
  if (uploadedImages.length > 0) {
    fileName = uploadedImages[uploadedImages.length - 1].name;
  }

  useEffect(() => {
    axios.get(`${apiEndpoint}?username=${username}`)
      .then(res => {
        const fetchedData = JSON.parse(res.data.body);
        console.log(fetchedData[0].author_id);
        setPost(fetchedData);
      })
      .catch(err => console.log(err))
  }, [])

  const handleImageUpload = (file, fileName) => {
    setUploadedImages((prevImages) => [...prevImages, file]);
    setContents((prevContents) => [...prevContents, fileName]);
  };

  const handleContentChange = (content) => {
    setContents((prevContents) => [...prevContents, content]);
  };

 
  const handlePostSubmit = (content) => {
    axios
      .post(apiEndpoint, {
        username: username,
        content: content,
        image_path: fileName,
      })
      .then((res) => {
        axios
          .get(`${apiEndpoint}?username=${username}`)
          .then((res) => {
            const fetchedData = JSON.parse(res.data.body);
            setPost(fetchedData);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));

    setModalOpen(false);
  };

  const handlerRemove = (post_id) => {
    console.log("Received post_id:", post_id);
    axios
      .delete(apiEndpoint, {
        data: {
          post_id: post_id,
          author_id: "1",
        },
      })
      .then((res) => {
        console.log(res);
  
        if (res.status === 200) {
          setPost((prevPost) => prevPost.filter((item) => item.post_id !== post_id));
        } else {
          console.log("삭제 실패");
        }
      })
      .catch((err) => console.log(err));
  };

  const handlerEdit = (item) => {
    setEditModalOn(true);
    console.log(item);
    setSelected(item);
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
                handlerRemove={() => handlerRemove(item.post_id)} // post_id를 prop 전달
                // handlerEditSubmit={handlerEditSubmit}
                // handlerEdit={handlerEdit}
                handlerEdit={(item) => handlerEdit(item)}
                selected={selected}
                username={username}
              />
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Community; 