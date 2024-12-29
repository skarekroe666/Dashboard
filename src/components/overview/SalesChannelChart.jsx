import React from 'react'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const SalesChannelChart = () => {

    const SALES_CHANNEL_DATA = [
        { name: "Website", value: 52938 },
        { name: "Mobile App", value: 72139 },
        { name: "MarketPlace", value: 12097 },
        { name: "Social Media", value: 22628 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md rounded-xl p-6 lg:col-span-2 border border-zinc-300 shadow-md'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Sales Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer>
                    <BarChart data={SALES_CHANNEL_DATA}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"value"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Bar dataKey={"value"} fill='#303030'>
                            {SALES_CHANNEL_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`}/>
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesChannelChart