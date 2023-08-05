import {useEffect} from "react";

const Login = () => {
    const Rest_api_key='a467cb476cd5ac847ed6ce10094ddfcf' //REST API KEY
    const redirect_uri = 'http://localhost:3000/auth' //Redirect URI

    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

    // useEffect로 유저정보를 가져오는 코드
    // 여기서 가져와서 State에 넣기
    useEffect(() => {
        const userAgent = navigator.userAgent;
        const isIOS = /iPhone|iPad|iPod/i.test(userAgent);
        const receiver = isIOS ? window : document;

        const handleMessage = (event) => {
            const data = JSON.parse(event.data);

            if (data) {
                sessionStorage.setItem("token", data);
            }
        };

        // receiver를 사용하여 플랫폼에 따른 로직을 처리
        receiver.addEventListener("message", handleMessage);

        // 컴포넌트 언마운트 시 이벤트 리스너를 정리
        return () => {
            receiver.removeEventListener("message", handleMessage);
        };
    }, []);

    return(
        <>
            <div className="flex h-screen w-full justify-center items-center bg-orange-100 bg-cover bg-no-repeat">

                <div className="text-black justify-center items-center flex flex-col">
                    <div className="mb-2 flex flex-col items-center">
                        <img src="/img/logo.png" className="w-5/4 pb-8" alt="" srcSet="" />
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
