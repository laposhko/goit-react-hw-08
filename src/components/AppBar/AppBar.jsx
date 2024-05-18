import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { selectLoginStatus } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { useSelector } from "react-redux";
export default function AppBar() {
  const isLoggedIn = useSelector(selectLoginStatus);
  return (
    <header className={css.header}>
      <Navigation></Navigation>
      {isLoggedIn ? <UserMenu></UserMenu> : <AuthNav></AuthNav>}
    </header>
  );
}
