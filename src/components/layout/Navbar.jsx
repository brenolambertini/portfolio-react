import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import Container from "./Container";
import MenuItems from "./MenuItems";

import styles from "./css/Navbar.module.css";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [active, setActive] = useState(false);

  function showMenu() {
    setActive(!active);
  }

  return (
    <nav className="mb-8 p-1">
      <Container>
        <h1 className="font-cinzel font-extrabold text-xl lg:ml-4">
          <Link to="/">Breno Lambertini</Link>
        </h1>

        {active ? (
          <MdClose size={28} className={styles.menu_btn} onClick={showMenu} />
        ) : (
          <GiHamburgerMenu
            size={28}
            className={styles.menu_btn}
            onClick={showMenu}
          />
        )}

        <ul className="hidden md:flex flex-wrap gap-8 text-base lg:mr-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className={styles.nav_ul}>
                <AiOutlineHome size={24} />
                Home
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className={styles.nav_ul}>
                <AiOutlineInfoCircle size={24} />
                About
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "font-bold" : undefined)}
            >
              <div className={styles.nav_ul}>
                <AiOutlineTool size={24} />
                Projects
              </div>
            </NavLink>
          </li>
        </ul>
      </Container>

      <MenuItems active={active} />
    </nav>
  );
}

export default Navbar;
