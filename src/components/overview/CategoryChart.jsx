import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { Legend } from 'recharts'

const CategoryChart = () => {

    const category = [
        {name: "Electronics", value: 8234},
        {name: "Clothing", value: 7623},
        {name: "Home & Garden", value: 4282},
        {name: "Books", value: 1724},
        {name: "Sports & Outdoor", value: 2186},
    ]

  return (
    <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-md rounded-xl p-6 border border-zinc-300'>
        <h2 className='text-lg font-medium mb-4 text-zinc-700'>Category Distribution</h2>

        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <PieChart>
                    <Pie 
                    data={category}
                    cx={"50%"}
                    cy={"50%"}
                    labelLine={false}
                    outerRadius={80}
                    fill='#303030'
                    dataKey='value'
                    label={({name, percent}) => `${name} ${(percent *100).toFixed(0)}%`}/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default CategoryChart