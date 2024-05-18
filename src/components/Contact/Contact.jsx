import css from "./Contact.module.css";
import { ThreeDots } from "react-loader-spinner";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectContactDeleter } from "../../redux/contacts/selectors";
export default function Contact({ data }) {
  const dispatch = useDispatch();
  const contactDeleter = useSelector(selectContactDeleter);
  // function deleteItem() {}
  return (
    <div>
      {contactDeleter === data.id ? (
        <div className={css.deleteContainer}>
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
      ) : (
        <div className={css.contact}>
          <div>
            <p>
              <IoIosContact className={css.icon} />
              {data.name}
            </p>
            <p>
              <FaPhoneAlt className={css.icon} />
              {data.number}
            </p>
          </div>
          <button onClick={() => dispatch(deleteContact(data.id))}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
