import { Formik, Form } from "formik";
import { object, string } from "yup";

const RegisterForm = () => {
  const loginSchema = object({
    email: string()
      .email("Lutfen valid bir email giriniz")
      .required("Bu alan zorunludur"),
    password: string()
      .required("Bu alan zorunludur")
      .min(8, "En az 8 karakter girilmelidir")
      .max(16, "En fazla 16 karakter girilmelidir")
      .matches(/\d+/, "En az bir rakam içermelidir.")
      .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
      .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
      .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
      username:string()
      .required("Bu alan zorunludur")
  });

  return (
    <div className="container auth-form">
      <Formik 
        initialValues={{
          username: "",
          email: "",
          password: "",
          image: "",
          bio: "",
        }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit} >
            <label htmlFor="username" className="form-label mt-5">
              Username*
            </label>
            <input
              className="form-control"
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <h3>{errors.username && touched.username && errors.username}</h3>
            <label htmlFor="email" className="form-label">
              Email address*
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <h3>{errors.email && touched.email && errors.email}</h3>

            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <h3>{errors.password && touched.password && errors.password}</h3>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
