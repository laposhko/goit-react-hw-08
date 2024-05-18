import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import { refreshUser } from "../../redux/auth/operations";
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
import { selectRefreshStatus } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
export default function App() {
  const isRefreshing = useSelector(selectRefreshStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader></Loader>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage></ContactsPage>}
                ></PrivateRoute>
              }
            ></Route>
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage></RegistrationPage>}
                ></RestrictedRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage></LoginPage>}
                ></RestrictedRoute>
              }
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      )}
    </>
  );
}
