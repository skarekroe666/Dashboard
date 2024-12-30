import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const UserActivityMap = () => {

    const userActivityData = [
        { name: "Mon", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 30 },
        { name: "Tue", "0-4": 30, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 40 },
        { name: "Wed", "0-4": 40, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 50 },
        { name: "Thu", "0-4": 50, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 60 },
        { name: "Fri", "0-4": 60, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 70 },
        { name: "Sat", "0-4": 70, "4-8": 90, "8-12": 110, "12-16": 130, "16-20": 150, "20-24": 80 },
        { name: "Sun", "0-4": 80, "4-8": 100, "8-12": 120, "12-16": 140, "16-20": 160, "20-24": 90 },
    ]

    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-zinc-300 shadow-md'>
            <h2 className='text-lg font-medium mb-4 text-zinc-700'>User Activity Heatmap</h2>

            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={userActivityData}>
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
                        <Bar dataKey='0-4' stackId='a' fill='#d1d5db' />  {/* Zinc 300 */}
                        <Bar dataKey='4-8' stackId='a' fill='#9ca3af' />  {/* Zinc 400 */}
                        <Bar dataKey='8-12' stackId='a' fill='#6b7280' />  {/* Zinc 500 */}
                        <Bar dataKey='12-16' stackId='a' fill='#4b5563' />  {/* Zinc 600 */}
                        <Bar dataKey='16-20' stackId='a' fill='#374151' />  {/* Zinc 700 */}
                        <Bar dataKey='20-24' stackId='a' fill='#1f2937' />  {/* Zinc 800 */}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UserActivityMap