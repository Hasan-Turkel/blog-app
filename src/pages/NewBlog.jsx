import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";





const NewBlog = () => {
  
  const {token} = useSelector((state)=>state.auth)
  const BASE_URL = "http://33499.fullstack.clarusway.com/";
  const [cat, setCat] = useState([]);
  console.log(cat);


  const getCat = async () => {
    try {
      const { data } = await axios(`${BASE_URL}api/categories/`);
      setCat(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  const sendBlog = async (values) => {

    try {
      const { data } = await axios.post(`${BASE_URL}api/blogs/`, values, 
      {headers:{Authorization: `Token ${token}`,
      

      }});
      // toastSuccessNotify("login islemi basarili")
      console.log(data);
    } catch (error) {
      console.log(error.message);
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };







  return (
    <div className="container auth-form">
      <Formik
        initialValues={{
          title: "",
          image: "",
          category: "",
          status: "",
          content: "",
        }}
        onSubmit={(values, action) => {
          sendBlog(values);
          action.resetForm();
          action.setSubmitting(false);
          console.log(values);
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
          <Form onSubmit={handleSubmit}>
            <label htmlFor="title" className="form-label mt-5">
              Title*
            </label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <h3>{errors.title && touched.title && errors.title}</h3>
            <label htmlFor="image" className="form-label">
              Image Url*
            </label>
            <input
              className="form-control"
              type="url"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            <h3>{errors.image && touched.image && errors.image}</h3>
            <label htmlFor="content" className="form-label">
              Content*
            </label>{" "}
            <br />
            <Field
              as="textarea"
              className="form-control textarea"
              type="text"
              name="content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <h3>{errors.content && touched.content && errors.content}</h3>
            <label htmlFor="category" className="form-label">
              Categories* (Please choose by clicking.)
            </label>
            <br />
            <Field
              as="select"
              className="form-control "
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
              role="button"
            >
              <option value="">Please choose</option>
              {cat?.map((item)=><option key={item.id} value={item.id}>{item.name}</option>)}
            </Field>
            <h3>{errors.category && touched.category && errors.category}</h3>

            <label htmlFor="status" className="form-label">
              Status* (Please choose by clicking.)
            </label>
            <br />
            <Field
              as="select"
              className="form-control "
              name="status"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.status}
            >
              <option value="">Please choose</option>
              <option value="d">Draft</option>
              <option value="p">Publish</option>
              
            </Field>
            <h3>{errors.status && touched.status && errors.status}</h3>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewBlog;
