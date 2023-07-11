import React, {useState} from 'react';
import { FiChevronDown, FiPlusSquare, FiMenu } from 'react-icons/fi';

export const ProfileBody = ({
  name,
  accountName,
  profileImage,
  post,
  followers,
  following,
}) => {
  return (
    <div style={{ alignItems: 'center' }}>
      {accountName && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold' }}>
              {accountName}
            </span>
            <FiChevronDown
              style={{
                fontSize: 20,
                color: 'black',
                paddingLeft: 5,
                opacity: 0.5,
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          </div>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div style={{ alignItems: 'center' }}>
          <img
            src={profileImage}
            style={{
              objectFit: 'cover',
              width: 80,
              height: 80,
              borderRadius: '50%',
            }}
            alt="Profile"
          />
          <span style={{ marginTop: 10, paddingTop: 5, fontWeight: 'bold' }}>
            {name}
          </span>
        </div>
        <div style={{ alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: 18 }}>{post}</span>
          <span>Posts</span>
        </div>
        <div style={{ alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: 18 }}>{followers}</span>
          <span>Followers</span>
        </div>
        <div style={{ alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: 18 }}>{following}</span>
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
              justifyContent: 'space-evenly',
              paddingVertical: 5,
            }}
          >
            <button
              onClick={handleEditProfile}
              style={{
                width: '95%',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: 35,
                  borderRadius: 5,
                  borderColor: '#DEDEDE',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: 1,
                    opacity: 0.8,
                  }}
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
                width: '42%',
                height: 35,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
            >
              <span>Message</span>
            </div>
            <div
              style={{
                width: '10%',
                height: 35,
                borderWidth: 1,
                borderColor: '#DEDEDE',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
              }}
            >
              <span style={{ fontSize: 20, color: 'black' }}>▼</span>
            </div>
          </div>
        )}
      </>
    );
  };
