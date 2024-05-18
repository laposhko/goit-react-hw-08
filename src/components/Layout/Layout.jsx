import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className={css.layout}>
      <ToastContainer autoClose={2000} />
      <AppBar />
      <Suspense fallback={null}>
        {<div className={css.content}>{children}</div>}
      </Suspense>
    </div>
  );
}
