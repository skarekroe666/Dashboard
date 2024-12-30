import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { Legend } from 'recharts'

const UserDemoGraphics = () => {

    const userDemoGraphs = [
        { name: "18-24", value: 20 },
        { name: "25-34", value: 30 },
        { name: "25-44", value: 40 },
        { name: "45-54", value: 50 },
        { name: "55+", value: 10 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-md rounded-xl p-6 border border-zinc-300 '>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>User Demographics</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={userDemoGraphs}
                            cx={"50%"}
                            cy={"50%"}
                            outerRadius={100}
                            fill='#303030'
                            dataKey='value'
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UserDemoGraphics