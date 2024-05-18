import { useSelector } from "react-redux";
import { selectLoginStatus } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component }) {
  const isLoggenIn = useSelector(selectLoginStatus);
  return isLoggenIn ? component : <Navigate to="/login" />;
}
