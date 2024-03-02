import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ім'я є обов'язковим для заповнення"),
  email: Yup.string()
    .email("Невірний формат електронної пошти")
    .required("Електронна пошта є обов'язковою для заповнення"),
  phone: Yup.string()
    .matches(/^\d+$/, "Тільки цифри допускаються")
    .min(12, "Телефон повинен містити 12 цифр")
    .max(12, "Телефон повинен містити 12 цифр")
    .required("Телефон є обов'язковим для заповнення"),
});

const App = () => {
  return (
    <div>
      <h1>Форма</h1>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor='name'>Ім'я</label>
              <Field type='text' name='name' />
              <ErrorMessage name='name' component='div' />
            </div>
            <div>
              <label htmlFor='email'>Електронна пошта</label>
              <Field type='email' name='email' />
              <ErrorMessage name='email' component='div' />
            </div>
            <div>
              <label htmlFor='phone'>Телефон</label>
              <Field type='tel' name='phone' />
              <ErrorMessage name='phone' component='div' />
            </div>
            <button type='submit' disabled={isSubmitting}>
              Відправити
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
