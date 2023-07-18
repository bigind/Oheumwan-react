import { useState } from 'react';
import React from 'react';
import Card from '../components/Card';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';

const Community = () => {
  const location = useLocation();
  const {title, content} = location.state || {};


  console.log('Title:', title);
  console.log('Content', content);

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
   <div style={styles.container}>
      {modalOpen && <Post setModalOpen={setModalOpen} />} 
      <div className='text-right'>
        <div className='w-full text-right'>
        <button className='w-1/12 pt-3' onClick={() => {setModalOpen(!modalOpen)}}>✏️</button>
        </div>
      </div>
      <div className='text-left'>
        {modalOpen === true ? (
          <Post setModalOpen={setModalOpen} />
        ) : (
          <div>
            {title && content && <Card src='1' likes='2324' content={`${title} ${content}`} />}
            <Card src='2' likes='26' content='두번째 게시물' />
            <Card src='3' likes='203' content='세번째 게시물' />
          </div>
        )}
      </div>
      <div>
        {/* <Card src='1' likes='2324' content='첫 게시물'/>
        <Card src='2' likes='26' content='두번째 게시물'/>
        <Card src='3' likes='203' content='세번째 게시물'/> */}
      </div>
    </div>
  );
};

export default Community;



