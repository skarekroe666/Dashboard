import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const UserGrowthChart = () => {

    const userGrowth = [
        { month: "January", users: 1200 },
        { month: "February", users: 2000 },
        { month: "March", users: 3000 },
        { month: "April", users: 4000 },
        { month: "May", users: 5500 },
        { month: "June", users: 7000 },
    ];

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-300'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Sales Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={userGrowth}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"month"} />
                        <YAxis dataKey={"users"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Line
                            type='monotone'
                            dataKey='users'
                            stroke='#303030'
                            strokeWidth={3}
                            dot={{ fill: "#303030", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UserGrowthChart