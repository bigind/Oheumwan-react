import React, { useEffect, useState } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
} from "recharts";
import axios from "axios";

function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("https://xs21gvtq40.execute-api.eu-central-1.amazonaws.com/oheumwan/data-graph")
            .then((res) => {
                console.log(res.data.body)
                setData(JSON.parse(res.data.body))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        
        <div className='bg-white items-center flex-1'>
            <div className="px-1 py-4">
                <h3 className="font-bold text-2xl font-sans ml-5">통계</h3>
                <RadarChart
                    cx={300}
                    cy={250}
                    outerRadius={150}
                    width={1000}
                    height={1000}
                    data={data}
                >
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar
                        name="Mike"  // identification. res.identification.body. main.py.
                        dataKey="A"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </div>



            <div style={{ height: '100vh', width: '100%', textAlign: 'center', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                {/*<h1 style={{ paddingTop: 50, fontSize: 30, fontFamily: 'Noto Serif KR, serif' }}>통계</h1>*/}
                {/*<p style={{ paddingTop: 20 }}>statistics</p>*/}
                {/*<img src="https://velog.velcdn.com/images/choichoijin/post/e6803bf9-084a-44bf-bf90-c1db4cf4cc61/image.png"/>*/}
                {/*<h2 style={{paddingTop: 20, fontFamily: 'Noto Serif KR, serif' }}>20-30대 가장 많이 찾는 음식</h2>*/}
                {/*<img src="img/graph.jpg"/>*/}
                <p></p>
            </div>

        </div>
    )
}

export default Home;
