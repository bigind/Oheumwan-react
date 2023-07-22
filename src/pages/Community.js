import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Card from '../components/Card';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/prod/community`;


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
  let fileName = '';
    if (uploadedImages.length > 0) {
      fileName = uploadedImages[uploadedImages.length - 1].name;
    }
  useEffect(() => {

    axios.post(apiEndpoint, {
              username: "user1",
              content: initialContent,
              image_path: fileName,
              post_id: 1
          }).then(res => {
            
            // const fetchedData = JSON.parse(res.config.data);
            // NextId.current = fetchedData.length > 0 ? Math.max(...fetchedData.map(post_id => post_id.current)) + 1 : 1;
            const jsonData = JSON.parse(res.config.data);
            console.log(res);
            console.log(jsonData);
            NextId.current = jsonData.length > 0 ? Math.max(...jsonData.map(post=> post.post_id.current)) + 1 : 1;
            console.log(NextId);
            
          }).catch(err => console.log(err))
    }, [uploadedImages, initialContent]);


  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  };

  const handleImageUpload = (file, fileName) => {
    setUploadedImages((prevImages) => [...prevImages, file]);
    setContents((prevContents) => [...prevContents, fileName]);
  };

  const handleContentChange = (content) => {
    setContents((prevContents) => [...prevContents, content]);
  };

  const handlePostSubmit = ( content) => {
    setContents((prevContents) => [...prevContents, content]);

    setModalOpen(false);
  };

  const handleremove = (username) => {
    setPost((post) => post.filter((item) => item.config.username !== username));
      
         axios
          .delete(`${apiEndpoint}/${username}`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  const handleEdit = (item) => {
    setEditModalOn(true);
    const selectedData = {
        id: item.id,
        name: item.name, 
        email: item.email,
        phone_number: item.phone_number,
        website_address: item.website_address
    };
    setSelected(selectedData);
};

  const handleEditSubmit = (item) => {
    // handleSave(item);
    axios
    .put(`${apiEndpoint}`, {
      id: item.id,
      name: item.name,
      email: item.email,
      phone_number: item.phone_number,
      website_address: item.website_address,
    })
    .then((res) => {
      console.log(res.data);
      setEditModalOn(false); // 모달을 닫는다
    })
    .catch((err) => {
      console.log(err);
    });
};
  

  return (
    <div style={styles.container}>
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
            {uploadedImages.map((image, index) => (
        <Card key={index} src={URL.createObjectURL(image)} likes='0' content={contents[index+1]} />
      ))}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;



