import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";
import {
  selectContactLoader,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
export default function ContactList() {
  const isLoading = useSelector(selectContactLoader);
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className={css.loader}>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#007bff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}
