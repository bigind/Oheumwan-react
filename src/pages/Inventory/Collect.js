
const Collect = () => {
  const ingredientsJSON = [
    {
      "id": 0,
      "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT780ihzuR1_ijb1ba0zFXCNcxA3tw4h5nwvQantmC4IGtjiz87hG412pViS7T2d2EnQ7w&usqp=CAU",
      "title": "양배추",
      "checked": true
    },
    {
      "id": 1,
      "imgSrc": "https://m.media-amazon.com/images/I/71S6oQqVa5L.jpg",
      "title": "당근",
      "checked": true
    },
    {
      "id": 2,
      "imgSrc": "https://media.istockphoto.com/id/1282866808/ko/%EC%82%AC%EC%A7%84/%EC%8B%A0%EC%84%A0%ED%95%9C-%EC%83%9D-%EB%8B%AD%EA%B3%A0%EA%B8%B0.jpg?s=612x612&w=0&k=20&c=R2M6I-Jx6lmJMS67aDJIptl5Srs34I493CSOoN1GIR0=",
      "title": "닭고기",
      "checked": true
    },
    {
      "id": 3,
      "imgSrc": "https://t1.daumcdn.net/cfile/tistory/1337644450067F2301",
      "title": "오이",
      "checked": true
    },
    {
      "id": 4,
      "imgSrc": "https://www.ktong.kr/wp-content/uploads/2020/06/%EA%B3%84%EB%9E%80-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EC%9D%98-%EB%86%80%EB%9D%BC%EC%9A%B4-%ED%9A%A8%EA%B3%BC.jpg",
      "title": "계란",
      "checked": true
    },
    {
      "id": 5,
      "imgSrc": "https://www.fsnews.co.kr/news/photo/202207/46085_38609_3827.jpg",
      "title": "마늘",
      "checked": true
    },
    {
      "id": 6,
      "imgSrc": "https://dimg.donga.com/wps/NEWS/IMAGE/2022/09/14/115451847.2.jpg",
      "title": "버섯",
      "checked": true
    },
    {
      "id": 7,
      "imgSrc": "https://cdn.kormedi.com/wp-content/uploads/2022/07/gettyimages-1312497207.jpg",
      "title": "양파",
      "checked": true
    },
    {
      "id": 8,
      "imgSrc": "https://cdn.huffingtonpost.kr/news/photo/201601/21945_42769.jpeg",
      "title": "감자",
      "checked": true
    },
    {
      "id": 9,
      "imgSrc": "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/05/19/20190519000031_0.jpg",
      "title": "애호박",
      "checked": true
    }
  ];

  return (
    <>
      <div className="px-1 py-4">
        <h3 className="font-bold text-2xl font-sans ml-5 ">보관함</h3>
      </div>

      <select className="font-bold block ml-5 px-2 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
        <option value="ingredient">
          재료
        </option>
        <option value="recipe">
          레시피
        </option>
      </select>

      <ul className="grid grid-cols-4 gap-3 px-2 mt-5">
        <li className="flex items-center flex-col">
          <img src="https://cdn.mkhealth.co.kr/news/photo/202106/53426_54835_622.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">양파 1개</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://health.chosun.com/site/data/img_dir/2023/01/11/2023011101791_0.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">쌀 1개</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Jericho</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Dianna</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/men/66.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Bernard</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/women/19.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Francis</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Edna</h5>
        </li>
        <li className="flex items-center flex-col">
          <img src="https://randomuser.me/api/portraits/men/21.jpg" alt="" className="rounded-full w-16 h-16 object-cover" />
          <h5 className="font-semibold">Carson</h5>
        </li>
      </ul>

      <div className="my-4 ml-5 pt-10">
        <button
          type="button"
          className="focus:outline-none text-white bg-black hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-2xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          레시피 추천
        </button>
      </div>
    </>
  );
};

export default Collect;