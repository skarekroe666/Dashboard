import { BarChart2, DollarSign, Menu, Settings, ShoppingCart, TrendingUp, Users } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, delay, motion } from 'framer-motion'
import { Link } from 'react-router'

const SidebarSection = () => {

    const SIDEBAR_ITEMS = [
        { name: "Overview", icon: BarChart2, href: "/" },
        { name: "Users", icon: Users, href: "/users" },
        { name: "Sales", icon: DollarSign, href: "/sales" },
        { name: "Orders", icon: ShoppingCart, href: "/orders" },
        { name: "Analytics", icon: TrendingUp, href: "/analytics" },
        { name: "Settings", icon: Settings, href: "/settings" }
    ]
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    
    return (
        <motion.div
            className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 
        ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            animate={{ width: isSidebarOpen ? 256 : 80 }}>
            <div className='h-full bg-zinc-100 bg-opacity-50 backdrop-blur-md p-4 flex flex-col border-r border-zinc-300'>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className='p-2 rounded-full hover:bg-zinc-300 transition-colors max-w-fit'>
                    <Menu className='text-zinc-500' size={24} />
                </motion.button>

                <nav className='mt-8 flex-grow'>
                    {SIDEBAR_ITEMS.map((item, index) => (
                        <Link key={item.href} to={item.href}>
                            <motion.div
                                className='flex items-center p-4 text-sm font-medium rounded-md hover:bg-zinc-400 transition-colors'>
                                <item.icon className='text-zinc-700' size={20} style={{ minWidth: "20px" }} />
                                <AnimatePresence>
                                    {isSidebarOpen && (
                                        <motion.spin className='ml-4 whitespace-nowrap'
                                            initial={{ opacity: 0, width: 0 }}
                                            animate={{ opacity: 1, width: "auto" }}
                                            exit={{ opacity: 0, width: 0 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}>
                                            {item.name}
                                        </motion.spin>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div>
    )
}

export default SidebarSection