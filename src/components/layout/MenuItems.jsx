import { NavLink } from "react-router-dom";

import styles from "./css/Navbar.module.css";

import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineTool,
  AiOutlineHourglass,
} from "react-icons/ai";

function MenuItems({ active }) {
  return (
    <ul
      className={
        active ? "md:hidden flex flex-col mb-2 gap-6 text-lg" : "hidden"
      }
    >
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "font-bold" : undefined)}
        >
          <div className={styles.menu_ul}>
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
          <div className={styles.menu_ul}>
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
          <div className={styles.menu_ul}>
            <AiOutlineTool size={24} />
            Projects
          </div>
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuItems;
