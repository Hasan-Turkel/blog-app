import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, likeSuccess } from "../features/blogSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCalls = () => {
    const dispatch = useDispatch();
    const navigate= useNavigate()
 
 
  const BASE_URL = "https://33499.fullstack.clarusway.com/";
  const {token} = useSelector((state)=>state.auth)

  const likeUnlike = async (id) => {
    dispatch(fetchStart());
    try {
        const { data } = await axios.post(`${BASE_URL}api/likes/${id}/`,1,
        {headers:{Authorization: `Token ${token}`
        
      }});
      // toastSuccessNotify("login islemi basarili")
      console.log(data);
      console.log(id);
      dispatch(likeSuccess(data));
    } catch (error) {
      console.log(error.message);
      console.log(id);
      console.log(token);
      dispatch(fetchFail());
    
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  const delBlog = async (id) => {
   
    try {
        const { data } = await axios.delete(`${BASE_URL}api/blogs/${id}/`,
        {headers:{Authorization: `Token ${token}`
        
      }});
      toastSuccessNotify("The blog has been deleted.")
      navigate(-1)
      console.log(data);
      console.log(id);
      
    } catch (error) {
      console.log(error.message);
      console.log(id);
    
      toastErrorNotify("Delete failed.")
    }
  };
  const updateBlog = async (values) => {
   
    try {
        const { data } = await axios.put(`${BASE_URL}api/blogs/${values.id}/`,values,
        {headers:{Authorization: `Token ${token}`
        
      }});
      toastSuccessNotify("The blog has been updated.")
     
      console.log(data);
      console.log(id);
      
    } catch (error) {
      console.log(error.message);
      console.log(id);
    
      toastErrorNotify("Update failed.")
    }
  };

  return {likeUnlike, delBlog, updateBlog};
};

export default useBlogCalls;
