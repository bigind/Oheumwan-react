import React from "react";

function Home() {
    return (
        <>
            <div style={{ height: '100vh', width: '100%', textAlign: 'center', backgroundImage: `url("https://i.pinimg.com/564x/22/74/65/2274651970051f1526de8870973370e5.jpg")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <h1 style={{ paddingTop: 50, fontSize: 30, fontFamily: 'Noto Serif KR, serif' }}>오늘의 레시피 추천</h1>
                <p style={{ paddingTop: 20 }}>Today's Food!</p>
            </div>

        </>
    )
}

export default Home;
