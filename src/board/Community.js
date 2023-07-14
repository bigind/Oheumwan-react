// import '../../src/App.css'
// import { useState } from 'react';
// import React from 'react';
// import Card from './Card';
// import { Component } from 'react';

// function Board() {

//   let [title,setTitle] = useState(['남자 코트 추천','강남 우동 맛집', '도산 베이커리 추천']);
//   let [like, setLike] = useState([0,0,0]);
//   let [modal, setModal] = useState(false);
//   return (
//     <>

//       <div className="App">
       
//         {
//           title.map(function(a,i){
//             return(
//             <div className='list'>
//                 <h4 onClick={ () => {modal == true ? setModal(false): setModal(true) }}>{ title[i] }<span onClick={() => {
//                   let copy = [...like];
//                   copy[i] = copy[i] + 1;
//                   setLike(copy)}}>❤️</span> {like[i]}
//                 </h4>
//                 <p>7월 6일</p>
//               </div>
//             )
//           })
//         }
        
//       </div>
//     </>
//   );
// }

import '../App.css'
import { useState } from 'react';
import React from 'react';
import Card from './Card';
import { Component } from 'react';
import Post from './Post';



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
      <button onClick={() => {setModal(!modal)}}>✏️</button>
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



