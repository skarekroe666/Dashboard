import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const DailySalesTrend = () => {

    const dailySalesdata = [
        { name: "Mon", sales: 1000 },
        { name: "Tue", sales: 1200 },
        { name: "Wed", sales: 900 },
        { name: "Thu", sales: 1100 },
        { name: "Fri", sales: 1300 },
        { name: "Sat", sales: 1600 },
        { name: "Sun", sales: 1400 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-zinc-300 shadow-md'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Daily Sale Trends</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={dailySalesdata}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Legend />
                        <Bar dataKey='sales' fill='#374151' />  {/* Zinc 300 */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default DailySalesTrend