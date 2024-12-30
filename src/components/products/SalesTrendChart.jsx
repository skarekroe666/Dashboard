import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesTrendChart = () => {

    const salesData = [
        { name: "Jul", sales: 4200 },
        { name: "Aug", sales: 2897 },
        { name: "Sep", sales: 9824 },
        { name: "Oct", sales: 4643 },
        { name: "Nov", sales: 7392 },
        { name: "Dec", sales: 5200 },
        { name: "Jan", sales: 6352 },
        { name: "Feb", sales: 2173 },
        { name: "Mar", sales: 1242 },
        { name: "Apr", sales: 8213 },
        { name: "May", sales: 4728 },
        { name: "Jun", sales: 5741 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-300'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Sales Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"sales"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Line
                            type='linear'
                            dataKey='sales'
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

export default SalesTrendChart