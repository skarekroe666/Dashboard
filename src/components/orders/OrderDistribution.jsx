import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { Legend } from 'recharts'

const OrderDistribution = () => {

  const orderStatusData = [
    { name: "Pending", value: 30 },
    { name: "Processing", value: 45 },
    { name: "Shipped", value: 60 },
    { name: "Delivered", value: 120 },
  ]

  return (
    <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md shadow-md rounded-xl p-6 border border-zinc-300'>
      <h2 className='text-lg font-medium mb-4 text-zinc-700'>User Demographics</h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={orderStatusData}
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

export default OrderDistribution