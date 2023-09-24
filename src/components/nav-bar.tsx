import { User } from "../mock/user"

export type NavbarProps = {
  userData?: User
}

export default function Navbar({ userData }: NavbarProps) {
  return (
    <header>
      <div>
        <img src="../assets/react.svg" height={50} alt="app_logo_navbar" />
      </div>
      <nav>
        {userData ? (
          <ul>
            <li>
              <a href="/profile">
                <img src={userData.photo} height={40} width={40} alt="user_profile_picture_navbar" />
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <a href="/sign-in">Sign In</a>
            </li>
            <li>
              <a href="/sign-up">Sign Up</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}