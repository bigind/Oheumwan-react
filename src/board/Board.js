import '../../src/App.css'
import { useState } from 'react';

function Board() {

  let post = '강남 우동 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집', '도산 베이커리 추천']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);



  return (
    <>

      <div className="App">
        <div className='black-nav'>
          <h4>Blog</h4>
        </div>
        <button onClick={() => {
          let copy = [...글제목]
          copy.sort();
          글제목변경(copy);
        }}>가나다순 정렬</button>
        <button onClick={() => {
          let copy = [...글제목] ;
          copy[0]='여자 코트 추천';
          글제목변경(copy);
        }}>글수정</button>
   

        {
          글제목.map(function(a,i){
            return(
            <div className='list'>
                <h4 onClick={ () => {modal == true ? setModal(false): setModal(true) }}>{ 글제목[i] }<span onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy)}}>❤️</span> {따봉[i]}
                </h4>
                <p>7월 6일</p>
              </div>
            )
          })
        }
        {
          modal==true ? <Modal 글제목={글제목} 글제목변경 = {글제목변경}/> : null
        }
      </div>
    </>
  );
}

function Modal(props) {
  return(
    <div className='modal'>
        {props.글제목.map(function(a,i){
          console.log(i);
          return(
            <h4>{a}</h4>
          )
        })}
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  
  )
}

export default Board;

