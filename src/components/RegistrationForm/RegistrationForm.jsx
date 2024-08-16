import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function RegistrationForm() {
  const dispatch = useDispatch();
  console.log("hello");
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Email should be valid").required("Required"),
    password: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });
  function handleSubmit(values, actions) {
    console.log(values);

    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("User is registered");
      })
      .catch(() => {
        toast.error("Please try again");
      });
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId}></Field>
        <ErrorMessage className={css.error} name="name" component="span" />
        <label htmlFor={emailId}>Email</label>
        <Field type="text" name="email" id={emailId}></Field>
        <ErrorMessage className={css.error} name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId}></Field>
        <ErrorMessage className={css.error} name="password" component="span" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
