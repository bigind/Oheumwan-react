import { useState, useEffect } from 'react';
import React from 'react';
import Card from '../components/Card';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiEndpoint = '';


const Community = () => {
  const location = useLocation();

  const { content: initialContent } = location.state || {};

  const [modalOpen, setModalOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [contents, setContents] = useState([]);

  // useEffect(() => {
  //   axios.get('https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/prod/community')
    
  //   .then(res => {
  //     console.log(res);
  // })
  // .catch(err => console.log(err));


  // }, []);

  console.log('Content', contents);

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
  };

  const handlerImageUpload = (file) => {
    setUploadedImages((prevImages) => [...prevImages, file]);
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
        <Card key={index} src={URL.createObjectURL(image)} likes='0' content={contents[index]} />
      ))}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;



