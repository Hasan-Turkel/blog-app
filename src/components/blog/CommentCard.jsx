import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const CommentCard = ({id, getDetailCard}) => {
const {token} = useSelector((state)=>state.auth)
  const BASE_URL = "https://33499.fullstack.clarusway.com/";

  const sendComment = async (values) => {

    try {
      const { data } = await axios.post(`${BASE_URL}api/comments/${id}/`, values, 
      {headers:{Authorization: `Token ${token}`,
      

      }});
      // toastSuccessNotify("login islemi basarili")
      console.log(data);
    } catch (error) {
      console.log(error.message);
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };



  
  return <div className="auth-form ">
  <Formik
    initialValues={{
     content:""
    }}
    onSubmit={(values, action) => {
    sendComment({...values, post:id});
    action.resetForm();
    action.setSubmitting(false);
    setTimeout(() => {
    getDetailCard();
}, 1000);
    
      
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
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
</div>;
};

export default CommentCard;
