import Header from '@/components/common/Header'
import StatCard from '@/components/common/StatCard'
import CategoryChart from '@/components/overview/CategoryChart'
import ProductTable from '@/components/products/ProductTable'
import SalesTrendChart from '@/components/products/SalesTrendChart'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import React from 'react'

const Products = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

        {/* Stast */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'>
          <StatCard name='Total Products' icon={Package} value='1234' />
          <StatCard name='Top Selling' icon={TrendingUp} value='124' />
          <StatCard name='Low Stock' icon={AlertTriangle} value='56' />
          <StatCard name='Total Revenue' icon={DollarSign} value='$54,321' />
        </div>

        {/* product */}

        <ProductTable />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryChart />
        </div>
      </main>
    </div>
  )
}

export default Products