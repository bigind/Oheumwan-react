import React, {useState} from "react";
const Check = () => {
    //재료 리스트(이미지 예시)
    
    const [isChecked, setIsChecked] = useState(true);
    const [products, setProducts] = useState([
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
      
    // const handleCheckboxChange = (event) => {setIsChecked(event.target.checked);};

    const handleCheckboxChange = (id) => {
        const updatedProducts = products.map((product) =>
          product.id === id ? { ...product, checked: !product.checked } : product
        );
        setProducts(updatedProducts); // 변경된 재료 목록으로 업데이트
      };
  
      

    return(
        
      <div className="flex flex-wrap w-full items-center text-center h-screen pt-3
      place-items-center">
        <h1 className="w-full">인식한 재료가 일치한가요?</h1>
        {/* 각 재료 사진 */}
        <div className="w-full h-3/5 p-1 overflow-y-auto">
        {products.map((product) => (
          <div key={product.id} className="w-full h-1/12 p-1 items-center">
            <div className="text-center  flex flex-row items-center justify-center">
            <div>
              <img src={product.imgSrc} className="max-w-60 h-10 object-cover" alt="인식된 재료" />
            </div>
            <h5 className="text-sm font-normal mt-2 pl-3">{product.title}</h5>
            <input className="mt-2 ml-2" type="checkbox" checked={product.checked} onChange={() => handleCheckboxChange(product.id)}/>
            </div>
          </div>
        ))}
        
      </div>
        <div className="w-full items-center flex justify-center">
            <div className="w-1/3 h-8 flex justify-between ">
            <button className="border border-2 border-solid rounded-lg w-10">추가</button>
            <button className="border border-2 border-solid rounded-lg w-10">저장</button>
            </div>
        </div>
      </div>
    );
  };

export default Check;