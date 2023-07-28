const Login = () => {
    const Rest_api_key='a467cb476cd5ac847ed6ce10094ddfcf' //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth' //Redirect URI

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    return(
        <>
            <div className="flex h-screen w-full items-center bg-white bg-cover bg-no-repeat">

                <div className="text-black justify-start items-center flex flex-col">
                    <div className="mb-2 flex flex-col items-center">
                        <img src="/img/logo.jpg" className="w-5/4 pb-8" alt="" srcSet="" />
                        <h1 className="pb-8 text-2xl font-light italic text-yellow-800">Oheumwan</h1>
                        {/*<span class="text-gray-300">Enter Login Details</span>*/}
                    </div>
                    <button onClick={() => {
                        // window.location.href = kakaoURL;
                        window.ReactNativeWebView.postMessage(JSON.stringify('true'));
                    }}>
                        <img src={"https://oheumwan-image-upload.s3.eu-central-1.amazonaws.com/kakao_login_medium_wide.png"} alt={"카카오 로그인"}/>
                    </button>
                </div>
                {/*<div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">*/}


                {/*</div>*/}
            </div>
        </>
    )
}
export default Login;
