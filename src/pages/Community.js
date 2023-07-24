import { useState, useEffect, useRef } from 'react';
import React from 'react';
import Card from '../components/Card';
import Post from '../components/Post';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const apiEndpoint = `https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/community`;


const Community = () => {
  const location = useLocation();

  const { content: initialContent } = location.state || {};
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [contents, setContents] = useState([]);
  const [post, setPost] = useState([]); // 전체 글
  const [selected, setSelected] = useState(''); // 선택된 글
  const [editmodalOn, setEditModalOn] = useState(false);
  const NextId = useRef();
  const [isLoading, setIsLoading] = useState(true); // 데이터 불러오기 전에 렌더링되어서 로딩변수 추가 
  let fileName = '';
    if (uploadedImages.length > 0) {
      fileName = uploadedImages[uploadedImages.length - 1].name;
    }

  

  useEffect(() => {
    //DB에서 데이터 가져오기
  const fetchDataFromDatabase = () => {
    axios.get(apiEndpoint, {
      params: {
        username: "user1",
      }
    }).then(res => {
      const data = res.data; // 받아온 데이터
      setPost(data); // 받아온 데이터를 post 상태에 저장
      setIsLoading(false);
    }).catch(err => console.log(err));
    };
    fetchDataFromDatabase(); // 컴포넌트가 처음 렌더링될 때 데이터를 불러옴
  }, []);

  // useEffect(() => {
  //   // selected 상태가 변경될 때마다 데이터를 다시 불러옴
  //   fetchDataFromDatabase();
  // }, [selected]);

  useEffect(() => {
    // const styles = {
    //   container: {
    //     flex: 1,
    //     backgroundColor: 'white',
    //   },
    // };

    axios.post(apiEndpoint, {
              username: "user1",
              content: initialContent,
              image_path: fileName
          }).then(res => {
            
            const jsonData = JSON.parse(res.config.data);
            // console.log(res);
            // console.log(jsonData);
            NextId.current = jsonData.length > 0 ? Math.max(...jsonData.map(post=> post.post_id.current)) + 1 : 1;
            console.log(NextId);
            
          }).catch(err => console.log(err))
    }, [uploadedImages, initialContent]);

  const handlerSave = (data) => {
    if (data.id) {
        setPost(
            post.map(row => data.id === row.id ? {
                id: data.id,
                name: data.name, 
                email: data.email,
                phone_number: data.phone_number,
                website_address: data.website_address,
            } : row));
      
    } else {
          
        setPost( post => post.concat(
            {
                id: NextId.current,
                name: data.name,
                email: data.email,
                phone_number: data.phone_number,
                website_address: data.website_address
            }
        ));
  
         
        axios.post(apiEndpoint, {
              id: NextId.current,
              name: data.name,
              email: data.email,
              phone_number: data.phone_number,
              website_address: data.website_address
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });

  
        NextId.current += 1;
      }
  }
  

  const handleImageUpload = (file, fileName) => {
    setUploadedImages((prevImages) => [...prevImages, file]);
    setContents((prevContents) => [...prevContents, fileName]);
  };

  const handleContentChange = (content) => {
    setContents((prevContents) => [...prevContents, content]);
  };

  const handlePostSubmit = ( content) => {
    setContents((prevContents) => [...prevContents, content]);

    setModalOpen(false);
  };

  const handleremove = (username) => {
    setPost((post) => post.filter((item) => item.config.username !== username));
      
         axios
          .delete(`${apiEndpoint}/${username}`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
  }

  const handleEdit = (item) => {
    setEditModalOn(true);
    console.log(item);
    const selectedData = {
        username: "user1",
        content: initialContent,
        image_path: fileName,
        post_id: 1
    };
    setSelected(selectedData);
};

  const handleEditSubmit = (item) => {
    // handleSave(item);
    axios
    .put(`${apiEndpoint}`, {
      id: item.id,
      name: item.name,
      email: item.email,
      phone_number: item.phone_number,
      website_address: item.website_address,
    })
    .then((res) => {
      console.log(res.data);
      setEditModalOn(false); // 모달을 닫는다
    })
    .catch((err) => {
      console.log(err);
    });
};
  

  return (
    <div className='bg-white items-center flex-1'>
      <div className='w-full'>
        <div className='text-right'>
          {!modalOpen && (
          <button className='w-1/12 pt-3' onClick={() => setModalOpen(true)}>✏️</button>)}
        </div>
      </div>
      {modalOpen && (
        <Post
          setModalOpen={setModalOpen}
          handleImageUpload={handleImageUpload}
          handleContentChange={handleContentChange}
          handlePostSubmit={handlePostSubmit}
        />
      )}

      <div className='text-left'>
        {!modalOpen && (
          <div>
            {uploadedImages.map((image, index) => (
        <Card key={index} src={URL.createObjectURL(image)} likes='0' content={contents[index+1]}  />
      ))}
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;



