import { NavLink, Outlet } from "react-router-dom"
import s from "./Layout.module.scss"

const Layout = () => {
  return (
    <div className={ s.wrapper }>
      <header className={ s.header }>
        <nav className={ s.nav }>
          <NavLink
            className={ ({ isActive }) =>
              isActive
                ? `${s.navLink} ${s.active}`
                : `${s.navLink}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={ ({ isActive }) =>
              isActive
                ? `${s.navLink} ${s.active}`
                : `${s.navLink}`
            }
            to="/Movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <div className={ s.container }>
        <main className={ s.main }> <Outlet /></main >
        <footer className={ s.footer }></footer>
      </div>
    </div>
  );
}

export default Layout;
