import { Route, Routes } from "react-router"
import Homepage from "./Pages/Homepage"
import Products from "./Pages/Products"
import SidebarSection from "./components/SidebarSection"


const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* bg */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* content */}
      <SidebarSection/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App