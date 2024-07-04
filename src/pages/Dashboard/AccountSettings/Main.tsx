
import { Outlet } from "react-router-dom"
import Settings from "./Settings"
import DashboardNav from "../DashboardNav"
import Menu from "../Menu"
import { Box } from "@mui/material"

const Main = () => {
  return (
    <div className="w-full h-auto">
    <DashboardNav />
    <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
      <Menu />
      <>
      <Settings />
      <Box overflow="hidden" flexGrow={1}>
      <Outlet />
      </Box>
      </>
    </div>
  </div>
    
  )
}

export default Main
