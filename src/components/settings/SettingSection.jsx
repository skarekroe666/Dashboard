import React from 'react'

const SettingSection = ({ icon: Icon, title, children }) => {
    return (
        <div className='bg-zinc-50 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-zinc-300 mb-8'>
            <div className='flex items-center mb-4'>
                <Icon className='mr-4' size='20' />
                <h2 className='text-xl font-semibold'>
                    {title}
                </h2>
            </div>
            {children}
        </div>
    )
}

export default SettingSection