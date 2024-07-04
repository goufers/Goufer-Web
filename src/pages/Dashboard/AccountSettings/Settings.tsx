import { Link } from "react-router-dom"
import menu from "./utils"

const AccountSettings = () => {
  return (
    <div className="container mx-auto ml-4 p-2 mt-20">
      <h2>Account Settings</h2>
      <div className="flex flex-row gap-8 justify-evenly">
        {menu.map((nav) =>(
           <Link to={nav.path}>
            {nav.name}
           </Link>
        ))}
      </div>
    </div>
  )
}

export default AccountSettings
