import React from "react";

function Home() {
    return (
        
        <div className='bg-white items-center flex-1'>
            <div className="px-1 py-4">
                <h3 className="font-bold text-2xl font-sans ml-5">통계</h3>
            </div>


            <div style={{ height: '100vh', width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                {/*<h1 style={{ paddingTop: 50, fontSize: 30, fontFamily: 'Noto Serif KR, serif' }}>통계</h1>*/}
                {/*<p style={{ paddingTop: 20 }}>statistics</p>*/}
                <img src="https://velog.velcdn.com/images/choichoijin/post/e6803bf9-084a-44bf-bf90-c1db4cf4cc61/image.png"/>
                <h2 style={{paddingTop: 20, fontFamily: 'Noto Serif KR, serif' }}>20-30대 가장 많이 찾는 음식</h2>
                <img src="img/graph.jpg"/>
                <p></p>
            </div>

        </div>
    )
}

export default Home;
