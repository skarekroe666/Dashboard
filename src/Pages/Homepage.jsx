import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import SalesOverviewChart from '@/components/overview/SalesOverviewChart'
import { BarChart2, ShoppingBag, Users, Zap } from 'lucide-react'
import React from 'react'

const Homepage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* stats */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
          <StatCard name='Total Sales' icon={Zap} value='$12,234' />
          <StatCard name='New Users' icon={Users} value='1,234' />
          <StatCard name='Total Products' icon={ShoppingBag} value='567' />
          <StatCard name='Coversion Rate' icon={BarChart2} value='12.5%' />
        </div>

        {/* charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart/>
        </div>
      </main>
    </div>
  )
}

export default Homepage