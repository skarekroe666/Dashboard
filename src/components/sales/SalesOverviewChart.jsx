import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const SalesOverviewChart = () => {

    const [selectTimeRange, setSelectTimeRange] = useState("This Month")

    const monthlySalesData = [
        { month: "Jan", sales: 4732 },
        { month: "Feb", sales: 5289 },
        { month: "Mar", sales: 6543 },
        { month: "Apr", sales: 3921 },
        { month: "May", sales: 6137 },
        { month: "Jun", sales: 4785 },
        { month: "Jul", sales: 6971 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-300'>
            <div className='flex items-center justify-between mb-6'>
                <h2 className='text-lg font-semibold mb-4 text-zinc-700'>Sales Overview</h2>
                <select className='bg-zinc-700 text-white text-sm rounded-md px-2 py-1 focus:outline-none focus:ring-2'
                    value={selectTimeRange}
                    onChange={(e) => setSelectTimeRange(e.target.value)}>
                    <option value="">This Week</option>
                    <option value="">This Month</option>
                    <option value="">This Quarter</option>
                    <option value="">This Year</option>
                </select>
            </div>

            <div className='w-full h-80'>
                <ResponsiveContainer>
                    <AreaChart data={monthlySalesData}>
                        <CartesianGrid strokeDasharray='3 3' stroke='silver' />
                        <XAxis dataKey={"name"} />
                        <YAxis dataKey={"sales"} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(234, 245, 255, 0.8)",
                                borderColor: "#4b5563"
                            }}
                            itemStyle={{ color: "#303030" }} />
                        <Area type='monotone' dataKey='sales' stroke='zinc' fill='zinc' fillOpacity={0.3}/>
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default SalesOverviewChart