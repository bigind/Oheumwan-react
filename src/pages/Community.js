import { useState, useEffect } from 'react';
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
  let fileName = '';
    if (uploadedImages.length > 0) {
      fileName = uploadedImages[uploadedImages.length - 1].name;
    }
  useEffect(() => {
    console.log(initialContent);
    console.log(fileName);
    axios.post(apiEndpoint, {
              username: "user1",
              content: initialContent,
              image_path: fileName,
          }).then(res => {
              console.log(res)
          }).catch(err => console.log(err))
}, [uploadedImages, initialContent]);


  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  };

  const handlerImageUpload = (file, fileName) => {
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
          handlerImageUpload={handlerImageUpload}
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



