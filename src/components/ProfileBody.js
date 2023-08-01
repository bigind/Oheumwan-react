import React, {useState, useEffect} from 'react';
import { FiSettings } from 'react-icons/fi';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';


const username = 'user1';
const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/community`;
const imageURL = `https://oheumwan-image-upload.s3.eu-central-1.amazonaws.com/`

const ProfileTab = ({profileImage}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // 프로필 아래 사진들이 쌓이는 부분
  const [images, setImages] = useState([]);


  // 사용자의 포스트를 모두 가져오는 요청
  useEffect(() => {
    axios.get(`${apiEndpoint}?username=${username}`)
      .then(res => {
        const fetchedData = JSON.parse(res.data.body);
        const extractedImages = fetchedData.map(item => item.image_path);
        setImages(extractedImages);
      })
      .catch(err => console.log(err))
  }, [])


  const renderSectionOne = () => {
    return (
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
       {images.map((image, index) => (
        <div
        key={index}
        style={{
          width: '33.33%',
          minheight: '33.33%',
          paddingLeft: index % 3 !== 0 ? 2 : 0,
          marginBottom: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          objectFit: 'cover'
        }}
        >
        <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={imageURL + image} alt={`Image ${index}`} />
        
        </div>
      ))}
    </div>
  );
};

  const renderSection = () => {
    if (activeIndex === 0) {
      return <div style={{ flexDirection: 'row', flexWrap: 'wrap' }}>{renderSectionOne()}</div>
    } else if (activeIndex === 1) {
      return (
        <div>
          <Card src="1" likes="100" />
          <Card src="2" likes="36" />
          <Card src="3" likes="240" />
        </div>
      );
    }
  };



  return (
    <div>
      <div>
          {renderSection()}
          
      </div>
      
    </div>
   
  );
};
export default ProfileTab;


export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {

  return (
    
    <div className='items-center'>
      {accountName 
      && (
        <div className='flex-1 items-center '>
          <div className='items-right flex flex-row justify-between'>
            <span className='text-lg font-bold'>
              {accountName}
            </span>
            <span className='text-xl text-black text-right'>
              
              
                <span className='text-sm'>Logout</span>
                
            </span>
          </div>
        </div>
      )
      }
     
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 20,
          paddingBottom: 20,
          textAlign: 'center'
        }}
       >
        <div className='items-center'>
          <img
            src={profileImage}
            className='object-cover w-20 h-20 rounded-full'
          alt="Profile"
          /><br/>
        </div>
        <div className='items-center'>
          <span className='font-bold text-lg' 
          >{post}</span><br/>
          <span>Posts</span>
        </div>
        <div className='items-center'>
          <span className='font-bold text-lg' >{followers}</span><br/>
            <span>Followers</span>
        </div>
        <div className='items-center'>
          <span className='font-bold text-lg' >{following}</span><br/>
          <span>Following</span>
        </div>
      </div>
    </div>
  );
}

export const ProfileButtons = ({ id, handleProfileEditOpen,editProfile}) => {
  console.log(editProfile);
    return (
      <>
       {(id === 0 && !editProfile) && (
        <div className="pb-5">
          <div className="w-full flex items-center justify-center rounded-lg border-solid border-neutral-500 border">
            <div className="w-full h-8 flex justify-center items-center">
              <span onClick={handleProfileEditOpen} className="text-sm cursor-pointer">
                Edit Profile
              </span>
            </div>
          </div>
       </div>
      )}
      </>
    );
  };

