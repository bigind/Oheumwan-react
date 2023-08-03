import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../components/Add";

const IngredientCheck = () => {
    //재료 리스트(이미지 예시)
    const [addOpen, setAddOpen] = useState(false);

    const [
        ingredients, setIngredients] = useState([
        {
          id: 1,
          imgSrc: 'https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556',
          title: '오이',
          checked: true,
        },
        {
          id: 2,
          imgSrc: 'https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg',
          title: '당근',
          checked: true,
        },
        {
          id: 3,
          imgSrc: 'https://post.healthline.com/wp-content/uploads/2020/08/AN471-Pork-Meat-732x549-thumb.jpg',
          title: '고기',
          checked: true,
        },
        {
          id: 4,
          imgSrc: 'https://m.media-amazon.com/images/I/71kb4tUZALL.jpg',
          title: '옥수수',
          checked: true,
        },
        {
          id: 5,
          imgSrc: 'https://img.taste.com.au/PRWBKAVs/taste/2007/10/garlic-182553-1.jpg',
          title: '마늘',
          checked: true,
        },
        {
          id: 6,
          imgSrc: 'https://img.choroc.com/newshop/goods/024444/024444_1.jpg',
          title: '김치',
          checked: true,
        },
        {
          id: 7,
          imgSrc: 'https://health.chosun.com/site/data/img_dir/2023/01/11/2023011101791_0.jpg',
          title: '밥',
          checked: true,
        },
        {
          id: 8,
          imgSrc: 'https://cdn.mkhealth.co.kr/news/photo/202106/53426_54835_622.jpg',
          title: '양파',
          checked: true,
        },
      ]);
      
    const navigate = useNavigate();

    const handleCancelClick = () => {
    navigate("/home");
    };
    
    //개별로 체크 true/false가 가능하도록 함
    const handleCheckboxChange = (id) => {
        const updatedIngredients = ingredients.map((ingredient) =>
          ingredient.id === id ? { ...ingredient, checked: !ingredient.checked } : ingredient
        );
        setIngredients(updatedIngredients); // 변경된 재료 목록으로 업데이트
    };

    const handleAddOpen = () => {
        setAddOpen(true);
      };
    
      const handleAddCancel = () => {
        setAddOpen(false);
      };


    return(
        
      <div className="flex flex-wrap w-full items-center text-center h-screen pt-3 place-items-center">
       {addOpen && (
      <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70">
        <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
          <Add handleAddCancel={handleAddCancel} />
        </div>
      </div>
    )}
        <h1 className="w-full">인식한 재료가 일치한가요?</h1>
        {/* 각 재료 사진 */}
        <div className="w-full h-3/5 p-1 overflow-y-auto">
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className="w-full h-1/12 p-1 items-center">
            <div className="text-center  flex flex-row items-center justify-center">
            <div>
              <img src={ingredient.imgSrc} className="max-w-60 h-10 object-cover" alt="인식된 재료" />
            </div>
            <h5 className="text-sm font-normal mt-2 pl-3">{ingredient.title}</h5>
            <input className="mt-2 ml-2" type="checkbox" checked={ingredient.checked} onChange={() => handleCheckboxChange(ingredient.id)}/>
            </div>
          </div>
        ))}

        </div>
      </div>
    );
  };

export default IngredientCheck;