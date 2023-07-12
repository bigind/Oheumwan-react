import '../../src/App.css'
import { useState } from 'react';

function Community() {

  let [title,setTitle] = useState(['묵은지 김치찜 레시피 이걸로 하세요 :)','냉털 자취 요리 추천', '다들 저녁 뭐 드시나요?']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);



  return (
    <>

      <div className="App">
        
        <button onClick={() => {
          let copy = [...title]
          copy.sort();
          setTitle(copy);
        }}>가나다순 정렬</button>
        
      
        {
          title.map(function(a,i){
            return(
            <div className='list'>
                <h4 onClick={ () => {modal == true ? setModal(false): setModal(true) }}>{ title[i] }<span onClick={() => {
                  let copy = [...good];
                  copy[i] = copy[i] + 1;
                  setGood(copy)}}>❤️</span> {good[i]}
                </h4>
                <p>7월 6일</p>
              </div>
            )
          })
        }
        {
          modal==true ? <Modal title={title} setTitle = {setTitle}/> : null
        }
      </div>
    </>
  );
}
function Modal(props) {
  return(
    <div className='modal'>
        {props.title.map(function(a,i){
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

export default Community;
