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
                console.log(res.data.body);
                setData(JSON.parse(res.data.body));
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <div className='flex flex-col items-center justify-start h-screen bg-white overflow-hidden'>
            <div className="w-full px-1 py-4 ">
                <h3 className="font-bold text-2xl font-sans mb-5">통계</h3>

                <RadarChart className="flex items-center justify-center"
                    cx={200}
                    cy={150}
                    outerRadius={90}
                    width={400}
                    height={310}
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
            <div className="w-full items-center text-center px-1 py-4">
                <div className="flex jusify-center items-center overflow-hidden">
                    <table className="w-full border-solid border-collapse border text-xs">
                        {/* <thead>
                             {data && (
                                <>
                                    <tr>
                                        {data.slice(0, 3).map((item, index) => (
                                            <th key={index} className="border p-2">{item.subject}</th>
                                        ))}
                                    </tr>
                                    <tr>
                                        {data.slice(3, 6).map((item, index) => (
                                            <th key={index} className="border p-2">{item.subject}</th>
                                        ))}
                                    </tr>
                                </>
                            )}
                        </thead> */}
                          <thead>
                            <tr>
                                {data && data.slice(0, 3).map((item, index) => (
                                    <th key={index} className="border p-2">
                                        {item.subject}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {data && data.slice(0, 3).map((item, index) => (
                                    <td key={index} className="border p-2">
                                        {item.A}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                {data && data.slice(3, 6).map((item, index) => (
                                    <th key={index} className="border p-2">
                                        {item.subject}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {data && data.slice(3, 6).map((item, index) => (
                                    <td key={index} className="border p-2">
                                        {item.A}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Home;
