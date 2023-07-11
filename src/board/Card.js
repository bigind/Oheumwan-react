import React, {Component} from 'react';
import { FiHeart, FiMessageCircle, FiSend } from 'react-icons/fi';

const Card = ({src, likes, content}) => {
    const images = {
        '1': process.env.PUBLIC_URL + '/img/so1.jpg',
        '2': process.env.PUBLIC_URL + '/img/so2.jpg',
        '3': process.env.PUBLIC_URL + '/img/so3.jpg'
    }
    return (
        <>
        <div>
        <div>
            <div style={{display: 'flex', flexDirection: 'row', marginLeft: 15, marginBottom: 10}}>
            <img src={"img/sohee.jpg"} alt="xeesoxee" style={{ objectFit: 'cover', width: 50,height: 50, borderRadius: '50%'}} />
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10, justifyContent: 'center'}}>
                    <span style={{fontWeight: '500'}}>xeesoxee</span>
                    <span>2023년 7월 11일</span>
                </div>
            </div>
        </div>
        </div>
        <div style={{textAlign: 'center'}}>
            <img src={images[src]} alt="xeesoxee" style={{ minHeight:200 , width: '100%', flex: 1 }} />
        </div>
        <div style={{ height: 45 , marginLeft: 10}}>
            <button>
                <FiHeart style={{ color: 'black' }} />
            </button>
            <button>
                <FiMessageCircle style={{ color: 'black' }} />
            </button>
        </div>
        <div style={{ height: 40, marginLeft: 10 }}>
            <span>좋아요 {likes}개</span>
        </div>
        <div>
        <span>
        <span style={{ fontWeight: '900', marginLeft: 15 }}>xeesoxee </span>{content}
        #인스타그램
        </span>
        </div>
        <hr/>
        </>
        );
    };
 
export default Card;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};