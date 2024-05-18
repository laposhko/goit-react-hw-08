import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import css from "./ContactsPage.module.css";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsPage}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader></Loader>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}

// export default function ContactsPage() {
//   return <p>contacts</p>;
// }
