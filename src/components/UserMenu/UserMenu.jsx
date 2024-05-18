import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import { toast } from "react-toastify";
export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  function handleLogOut() {
    console.log("logout");
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("You are logged out");
      });
  }
  return (
    <>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </>
  );
}
