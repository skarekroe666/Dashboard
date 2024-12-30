import { Route, Routes } from "react-router"
import Homepage from "./Pages/Homepage"
import Products from "./Pages/Products"
import SidebarSection from "./components/SidebarSection"
import Users from "./Pages/Users"
import SalesPage from "./Pages/SalesPage"
import Orders from "./Pages/Orders"
import Settings from "./Pages/Settings"


const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* bg */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* content */}
      <SidebarSection />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App