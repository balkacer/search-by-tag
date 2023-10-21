import { NavLink, Outlet } from "react-router-dom"
import USER, { User } from "../mock/user"

const avatarSubtitle: Record<User['type'], string> = {
  candidate: "Your job is waiting for you!",
  company: ""
}

function MainLayout() {
  function handleLogOut(): void {
    console.log("logged out");
  }

  return (
    <div className="flex h-screen w-screen bg-black">
      <header className="flex flex-col p-10 bg-black w-full max-w-[250px] justify-between h-screen items-center">
        <div className="flex flex-col gap-10 items-center">
          <div className="flex flex-col gap-2 items-center">
            <div className="w-[80px] h-[80px] justify-center overflow-hidden bg-white rounded-full">
              <img src={USER.photo} alt="img-profile-picture" className="object-cover h-full" />
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-lg text-white">Hi, {USER.name}</h1>
              <span className="text-xs text-center text-gray-500">{avatarSubtitle[USER.type]}</span>
            </div>
          </div>
          <nav className="flex flex-col gap-4 w-full">
            <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-500"} to={"/"}>Dashboard</NavLink>
            <NavLink className={({ isActive }) => isActive ? "text-white" : "text-gray-500"} to={"/login"}>
              <span className="flex flex-row justify-between items-center">
                <span>Messages</span>
                <div className="p-3 bg-white text-black rounded-full aspect-square h-4 flex justify-center items-center text-sm font-bold">4</div>
              </span>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "text-white" : "text-gray-500")} to={"/jobs"}>Jobs</NavLink>
          </nav>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <button className="text-gray-500 text-left" onClick={handleLogOut}>Log Out</button>
        </div>
      </header>
      <main className="flex items-center bg-slate-100 h-screen p-10 w-full rounded-l-3xl flex-row">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout