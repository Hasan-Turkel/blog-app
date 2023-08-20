import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, registerSuccess, logoutSuccess } from "../features/authSlice";

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = "http://33499.fullstack.clarusway.com/";

  const login = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/auth/login/`, values);
      dispatch(loginSuccess(data));
      // toastSuccessNotify("login islemi basarili")
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  const register = async (values) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, values);
      dispatch(registerSuccess(data));
      // toastSuccessNotify("login islemi basarili")
      navigate("/");
      console.log(data);
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      dispatch(logoutSuccess());
      // toastSuccessNotify("login islemi basarili")
      navigate("/");
    } catch (error) {
      console.log(error.message);
      dispatch(fetchFail());
      // toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
