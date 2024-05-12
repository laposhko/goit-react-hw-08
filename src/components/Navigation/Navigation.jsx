import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => {
          return isActive && css.active;
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive && css.active;
        }}
        to="/contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
}
