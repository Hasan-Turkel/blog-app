import { useSelector } from "react-redux";
import axios from "axios";

const useBlogCalls = () => {
 
 
  const BASE_URL = "http://33499.fullstack.clarusway.com/";
  const {token} = useSelector((state)=>state.auth)

  const likeUnlike = async (id) => {
    
    try {
        const { data } = await axios.post(`${BASE_URL}api/likes/${id}/`,1,
        {headers:{Authorization: `Token ${token}`
        
      }});
      // toastSuccessNotify("login islemi basarili")
      console.log(data);
      console.log(id);
    } catch (error) {
      console.log(error.message);
      console.log(id);
      console.log(token);
    
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  return {likeUnlike};
};

export default useBlogCalls;
