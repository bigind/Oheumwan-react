
const Collect = () => {
    //재료 리스트(이미지 예시)
    const products = [
      {
        id: 1,
        imgSrc: 'https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556',
        title: '오이'
      },
      {
        id: 2,
        imgSrc: 'https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg',
        title: '당근'
      },
      {
        id: 3,
        imgSrc: 'https://post.healthline.com/wp-content/uploads/2020/08/AN471-Pork-Meat-732x549-thumb.jpg',
        title: '고기'
      },
      {
        id: 4,
        imgSrc: 'https://m.media-amazon.com/images/I/71kb4tUZALL.jpg',
        title: '옥수수'
      },
      {
        id: 5,
        imgSrc: 'https://img.taste.com.au/PRWBKAVs/taste/2007/10/garlic-182553-1.jpg',
        title: '마늘'
      },
      {
        id: 6,
        imgSrc: 'https://img.choroc.com/newshop/goods/024444/024444_1.jpg',
        title: '김치'
      },
      {
        id: 7,
        imgSrc: 'https://health.chosun.com/site/data/img_dir/2023/01/11/2023011101791_0.jpg',
        title: '밥'
      },
      {
        id: 8,
        imgSrc: 'https://cdn.mkhealth.co.kr/news/photo/202106/53426_54835_622.jpg',
        title: '양파'
      },
    ];
  
    return (
      <div className="flex flex-wrap w-full items-center text-center h-screen place-content-start pt-3
      ">
        {/* 각 재료 사진 */}
        {products.map((product) => (
          <div key={product.id} className="w-1/3 p-1 ">
            <div className="text-center">
              <img src={product.imgSrc} className="max-w-90 h-32 object-cover" alt="인식된 재료" />
            </div>
            <h5 className="text-sm font-normal mt-2 ">{product.title}</h5>
          </div>
        ))}
      </div>
    );
  };
  
  export default Collect;