import { useState } from 'react';
import React from 'react';
import Card from '../components/Card';
import { Component } from 'react';
import Post from '../components/Post';



const Community = () => {

  const styles = {
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    
  };
  
  const [modal, setModal] = useState(false);

  return (
    <div style={styles.container}>
      <div style={{textAlign: 'right'}}>
        <div style={{width: '100%', textAlign: 'right'}}>
        <button style={{width: '10%'}} onClick={() => {setModal(!modal)}}>✏️</button>
        </div>
      </div>
      <div style={{textAlign: 'left', padding: 5}}>
        {modal === true ? <Post/> : (
        <div>
          <Card src='1' likes='2324' content='첫 게시물'/>
          <Card src='2' likes='26' content='두번째 게시물'/>
          <Card src='3' likes='203' content='세번째 게시물'/>
        </div>) }
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



