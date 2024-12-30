import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const SalesCategoryChart = () => {

    const salesByCategory = [
        { name: "Electronics", value: 400 },
        { name: "Clothing", value: 300 },
        { name: "Home & Garden", value: 200 },
        { name: "Books", value: 150 },
        { name: "Others", value: 100 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-zinc-300'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>Sales by Category</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={salesByCategory}
                            cx={"50%"}
                            cy={"50%"}
                            outerRadius={80}
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

export default SalesCategoryChart