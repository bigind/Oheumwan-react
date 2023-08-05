import React, { useState, useEffect } from 'react';
import ProfileTab, { ProfileBody, ProfileButtons } from '../components/ProfileBody';
import EditProfile from '../components/EditProfile';

const ProfileScreen = () => {
  let circuls = [];
  let numberofcircels = 10;

  const [username,setUsername] = useState("user1");
  const [userIntroduce, setUserIntroduce] = useState("안녕하세요, 한소희입니다.");
  const [userPostConut, setUserPostConut] = useState(500);

  const [editProfile, setEditProfile] = useState(false);

  for (let index = 0; index < numberofcircels; index++) {
    circuls.push(
      <div key={index}>
        {index === 0 ? (
          <div
            style={{
              width: 30,
              height: 60,
              borderRadius: 100,
              borderWidth: 1,
              opacity: 0.7,
              margin: '0 5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
          </div>
        ) : (
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'black',
              opacity: 0.1,
              margin: '0 5px',
            }}
          ></div>
        )}
      </div>,
    );
  }

  const handleEditProfileButtonClick = () => {
    // 프로필 수정 버튼 클릭 시 editProfile 상태 변경
    setEditProfile(true);
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white'}}>
      <div className="px-1 py-4">
        <h3 className="font-bold text-2xl font-sans ml-5">프로필</h3>
      </div>
      <div style={{ width: '100%', padding: 20 }}>
          {sessionStorage.getItem("token")}

        {/* 유저 프로필 상단 */}
        <ProfileBody
          name=""
          accountName={username}
          profileImage={"img/sohee.jpg"}
          followers="3.6M"
          following="35"
          post={userPostConut}
        />
        
        {/* 유저 소개 */}
        {!editProfile && (
        <div style={{paddingLeft: 20, paddingBottom: 10}}>{userIntroduce}</div>
        )}

        {editProfile && 
        (
          <EditProfile userIntroduce={userIntroduce} setUserIntroduce={setUserIntroduce} setEditProfile={setEditProfile} />
        )}
        
        {/* 유저 소개 수정 버튼 */}
        <ProfileButtons
          // handleProfileEditOpen={handleProfileEditOpen}
          handleEditProfileButtonClick={handleEditProfileButtonClick}
          id={0}
          name="Sohui Han"
          accountName={username}
          profileImage={"img/sohee.jpg"}
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />

        {/* 유저 게시글 썸네일 이미지 모음 */}
        <ProfileTab
        profileImage={"img/sohee.jpg"} 
        />
      </div>
      <div>
      </div>
    </div>
  );
};

export default ProfileScreen;