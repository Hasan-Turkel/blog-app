import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../components/blog/Card"

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
        <div className="d-flex justify-content-center align-items-center">
          <h3>
            No Blogs!{" "}
            <span className="text-danger" role="button" onClick={()=>navigate("/new-blog")}>
              Do you want to add?
            </span>
          </h3>
        </div>
      ) : (
        <div className="row justify-content-center my-5 gap-4">
        {data?.map((item)=>(<div  key={item.id} className="col-9 col-md-4 col-lg-3"><Card  {...item} /></div>))}
      </div>
      )}
    </div>
  );
};

export default MyBlogs;
