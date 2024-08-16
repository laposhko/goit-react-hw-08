import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { logIn } from "../../redux/auth/operations";
import { toast } from "react-toastify";
export default function LoginForm() {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const formSchema = Yup.object().shape({
    email: Yup.string().email("Email should be valid").required("Required"),
    password: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });
  function handleSubmit(values, actions) {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("You are in!");
      })
      .catch(() => {
        toast.error("The login details are invalid");
      });
    actions.resetForm();
  }
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      <Form className={css.form}>
        <label htmlFor={emailId}>Email</label>
        <Field type="text" name="email" id={emailId}></Field>
        <ErrorMessage className={css.error} name="email" component="span" />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId}></Field>
        <ErrorMessage className={css.error} name="password" component="span" />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
}
