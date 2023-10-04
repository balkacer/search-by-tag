// import { User } from "../mock/user"

export type NavbarProps = {

}

export default function Navbar({ }: NavbarProps) {
  return (
    <header className="flex bg-blue-600 px-8 py-4 w-screen box-border justify-center">
      <div className="flex max-w-[1024px] min-h-full items-center gap-[4rem] w-full">
        {/* Logo */}
        <div style={{ backgroundImage: "/vite.svg" }} className="h-full aspect-video bg-white rounded-xl"></div>
        {/* Search Bar */}
        <div className="relative w-full h-full">
          <input type="text" placeholder='Search "javascript developer"' className=" input-md bg-white text-black rounded-full placeholder:text-gray-500 w-full pr-[175px]" />
          <div className="absolute flex h-[70%] top-[15%] right-0 mr-2">
            <button className="h-full text-blue-600 bg-blue-300 flex items-center gap-3 px-4 whitespace-nowrap rounded-lg font-bold top-[15%] right-0 mr-2">
              Categories
              <div style={{ backgroundColor: '/images/arrow-down.svg' }} className="w-[15px] aspect-square bg-blue-600"></div>
            </button>
            <div className="h-full aspect-square bg-blue-600 rounded-full"></div>
          </div>
        </div>
        {/* Auth options */}
        <div className="flex gap-4">
          <button className="text-white bg-blue-500 px-4 py-2 whitespace-nowrap rounded-lg font-bold">Sign In</button>
          <button className="text-blue-500 bg-white px-4 py-2 whitespace-nowrap rounded-lg font-bold">Sign Up</button>
        </div>
      </div>
    </header>
  )
}