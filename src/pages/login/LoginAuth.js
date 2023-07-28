import React, {useState} from "react";

const LoginAuth = () => {

    // useEffect(() => {
    //     const params= new URL(document.location.toString()).searchParams;
    //     const code = params.get('code');
    //     const grantType = "authorization_code";
    //     const REST_API_KEY = ``;
    //     const REDIRECT_URI = `http://192.168.0.15:3000/auth`;
    //
    //     axios.post(
    //         `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    //         {},
    //         { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
    //     )
    //         .then((res) => {
    //             console.log(res);
    //             const { access_token } = res.data;
    //             axios.post(
    //                 `https://kapi.kakao.com/v2/user/me`,
    //                 {},
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${access_token}`,
    //                         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //                     }
    //                 }
    //             )
    //                 .then((res) => {
    //                     console.log('사용자 정보', res);
    //                     setNickname(res.data.kakao_account.profile.nickname);
    //                 })
    //         })
    //         .catch((Error) => {
    //             console.log(Error);
    //         })
    //
    // }, []);


    return(
        <> </>
    )
}
export default LoginAuth;
