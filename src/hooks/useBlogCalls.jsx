import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchFail, fetchStart, likeSuccess } from "../features/blogSlice";

const useBlogCalls = () => {
    const dispatch = useDispatch();
 
 
  const BASE_URL = "http://33499.fullstack.clarusway.com/";
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

  return {likeUnlike};
};

export default useBlogCalls;
