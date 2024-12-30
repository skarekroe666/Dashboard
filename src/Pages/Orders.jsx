import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import DailyOrders from '@/components/orders/DailyOrders'
import OrderDistribution from '@/components/orders/OrderDistribution'
import OrdersTable from '@/components/orders/OrdersTable'
import { CheckCircle, Clock, DollarSign, ShoppingBag } from 'lucide-react'
import React from 'react'

const Orders = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <Header title="Orders" />

            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
                    <StatCard name='Total Orders' icon={ShoppingBag} value='1,234' />
                    <StatCard name='Pending Orders' icon={Clock} value='56' />
                    <StatCard name='Complete Orders' icon={CheckCircle} value='1,178' />
                    <StatCard name='Total Revenue' icon={DollarSign} value='$99,999' />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <DailyOrders />
                    <OrderDistribution/>
                </div>
                <OrdersTable/>
            </main>
        </div>
    )
}

export default Orders