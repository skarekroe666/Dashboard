import React from 'react'

const Header = ({ title }) => {
    return (
        <header className='bg-zinc-200 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-zinc-300'>
            <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8'>
                <h1 className='text-2xl font-semibold text-zinc-900'>{title}</h1>
            </div>
        </header>
    )
}

export default Header