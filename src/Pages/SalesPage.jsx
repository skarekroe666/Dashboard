import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import DailySalesTrend from '@/components/sales/DailySalesTrend'
import SalesCategoryChart from '@/components/sales/SalesCategoryChart'
import SalesOverviewChart from '@/components/sales/SalesOverviewChart'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react'
import React from 'react'

const SalesPage = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Sales Dashboard" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                {/* stats */}
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <StatCard name='Total Revenue' icon={DollarSign} value='$1,234,567' />
                    <StatCard name='Avg. Order Value' icon={ShoppingCart} value='$78.99' />
                    <StatCard name='Coversion Rate' icon={TrendingUp} value='3.45%' />
                    <StatCard name='Sales Growth' icon={CreditCard} value='12.3%' />
                </div>

                <SalesOverviewChart/>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 mt-8'>
                    <SalesCategoryChart/>
                    <DailySalesTrend/>
                </div>
            </main>
        </div>
    )
}

export default SalesPage