import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const DailyOrders = () => {

    const dailyOrders = [
        { date: "07/01", orders: 45 },
        { date: "07/02", orders: 60 },
        { date: "07/03", orders: 52 },
        { date: "07/04", orders: 49 },
        { date: "07/05", orders: 55 },
        { date: "07/06", orders: 58 },
        { date: "07/07", orders: 62 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-300'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Daily Orders</h2>

            <div style={{width:"100%", height: 300}}>
                <ResponsiveContainer>
                    <LineChart data={dailyOrders}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"date"} />
                        <YAxis dataKey={"orders"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Line
                            type='monotone'
                            dataKey='orders'
                            stroke='#303030'
                            strokeWidth={3}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DailyOrders