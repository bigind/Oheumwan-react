import React, {useState, useCallback} from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaBars } from "react-icons/fa";
import Card from './Card';
import Sidebar from './Sidebar';


const images = [
  'img/so1.jpg',
  'img/so2.jpg',
  'img/so3.jpg',
  'img/so4.jpg',
  'img/so5.jpg',
  'img/so6.jpg',
]


const ProfileTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // 프로필 아래 사진들이 쌓이는 부분
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
        <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={image} alt={`Image ${index}`} />
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

  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    
    <div className='items-center'>
      {accountName 
      && (
        <div className='flex-1 items-center '>
          <div className='items-right flex flex-row justify-between'>
            <span className='text-lg font-bold'>
              {accountName}
            </span>
            {/* 설정(setting) 버튼 */}
            <span className='text-xl text-black text-right'>
              {!isOpen && (
                <FiSettings className='cursor-pointer' onClick={toggleSide}/>
                )}
            </span>
          </div>
        </div>
      )
      }
      {/* 설정버튼 클릭시 열기 */}
      {isOpen && (
        <Sidebar isOpen={isOpen}
        />
      )}
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
          <span 
          className='mt-2 pt-1 font-bold'>
            {name}
          </span>
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

export const ProfileButtons = ({ id, name, accountName, profileImage }) => {
    const [follow, setFollow] = useState(false);

    const handleEditProfile = () => {
    };
    
    return (
      <>
        {id === 0 ? (
          <div
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            className='w-full flex-row items-center justify-center'
          >
            <button
              onClick={handleEditProfile}
              style={{
                width: '100%'
              }}
            >
              <div
                className='w-full h-10' 
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: 1,
                    opacity: 0.8,
                    alignItems: 'center',
                    width: '100%'
                  }}
                  className='font-bold text-lg items-center w-full '
                >
                  Edit Profile
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <button
              onClick={() => setFollow(!follow)}
              style={{ width: '42%' }}
            >
              <div
                style={{
                  width: '100%',
                  height: 35,
                  borderRadius: 5,
                  backgroundColor: follow ? null : '#3493D9',
                  borderWidth: follow ? 1 : 0,
                  borderColor: '#DEDEDE',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span style={{ color: follow ? 'black' : 'white' }}>
                  {follow ? 'Following' : 'Follow'}
                </span>
              </div>
            </button>
            <div
              style={{
                width: '10%',
                height: 35,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                borderRadius: 5,
              }}
            >
            
            </div>
          </div>
        )}
      </>
    );
  };

