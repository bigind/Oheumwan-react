const Post = () => {
    return (
    <div className="w-full h-screen">
        <div className="text-xl text-neutral-500 font-bold mt-5 mb-2 text-center" >New Post</div>
        <form className="mt-3" >
        <div className="flex flex-col md:flex-row mb-1 items-center">
            <label htmlFor="title" className="w-11/12 flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">
            Title
            <input className="w-full py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="제목을 입력해주세요"
                type="text"
                id="title"
                name="title"
            />
            </label>
            <label htmlFor="content" className="w-11/12 flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">
            Content
            <textarea
                className="w-full h-40 py-3 px-1 mt-1 text-gray-800 appearance-none border-2 border-gray-100 focus:text-gray-500 focus:outline-none focus:border-gray-200"
                required
                placeholder="내용을 입력해주세요"
                type="text"
                id="content"
                name="content"
            />
            </label>
        </div>
        <div className="text-center">
        <button
        className="bg-stone-400 py-2 text-center px-10 md:px-12 md-py-2 text-white rounded text-xl md:text-base mt-4"
        type="submit"
        >저장</button>
        </div>
     </form>
    </div>
    );
}

export default Post ;