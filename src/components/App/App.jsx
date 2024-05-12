// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import ContactList from "../ContactList/ContactList";
// import css from "./App.module.css";
// import { fetchContacts } from "../../redux/contacts/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { ColorRing } from "react-loader-spinner";
// import { ToastContainer } from "react-toastify";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { selectLoading, selectError } from "../../redux/contacts/selectors";
import Layout from "../Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/contacts" element={<ContactsPage></ContactsPage>}></Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
  // const isLoading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // if (error) {
  //   toast.error("Request error");
  // }
  // return (
  //   <div className={css.app}>
  //     <ToastContainer autoClose={2000} />
  //     <h1>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {isLoading && (
  //       <div className={css.loaderContainer}>
  //         <ColorRing
  //           visible={true}
  //           height="80"
  //           width="80"
  //           ariaLabel="color-ring-loading"
  //           wrapperStyle={{}}
  //           wrapperClass="color-ring-wrapper"
  //           colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  //         />
  //       </div>
  //     )}
  //     {error && <p>{error}</p>}
  //     <ContactList />
  //   </div>
  // );
}
