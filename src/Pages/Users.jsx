import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import UserActivityMap from '@/components/users/UserActivityMap'
import UserDemoGraphics from '@/components/users/UserDemoGraphics'
import UserGrowthChart from '@/components/users/UserGrowthChart'
import UserTable from '@/components/users/UserTable'
import { UserCheck, UserPlus, UsersIcon, UserX } from 'lucide-react'
import React from 'react'

const Users = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Users" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* stats */}
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <StatCard name='Total Users' icon={UsersIcon} value='152,982' />
                    <StatCard name='New Users Today' icon={UserPlus} value='243' />
                    <StatCard name='Active Users' icon={UserCheck} value='98,312' />
                    <StatCard name='Churn Rate' icon={UserX} value='2.5%' />
                </div>

                {/* table n charts*/}
                <UserTable />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
                    <UserGrowthChart/>
                    <UserActivityMap/>
                    <UserDemoGraphics/>
                </div>
            </main>
        </div>
    )
}

export default Users