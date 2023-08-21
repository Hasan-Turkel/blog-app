import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const { user } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const BASE_URL = "http://33499.fullstack.clarusway.com/";
  const [data, setData] = useState([]);
  const getMyBlogs = async () => {
    try {
      const { data } = await axios(`${BASE_URL}api/blogs?author=${user.id}`, {
        headers: { Authorization: `Token ${token}` },
      });
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyBlogs();
  }, []);

  return (
    <div>
      {!data?.length ? (
        <div className="d-flex justify-content-center align-items-center my-4">
          <h3>
            No Blogs!{" "}
            <span className="text-danger" role="button" onClick={()=>navigate("/new-blog")}>
              Do you want to add?
            </span>
          </h3>
        </div>
      ) : (
        <h1>data var</h1>
      )}
    </div>
  );
};

export default MyBlogs;
