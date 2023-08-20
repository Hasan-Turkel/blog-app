import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/blog/Card";

const Detail = () => {
  const { id } = useParams();
  const {token} = useSelector((state)=>state.auth)

  const BASE_URL = "http://33499.fullstack.clarusway.com/";
  const [data, setData] = useState([]);
  const getDetailCard = async () => {
    try {
      const { data } = await axios(`${BASE_URL}api/blogs/${id}/`, 
      {headers:{Authorization: `Token ${token}`

      }});
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailCard();
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center text-center m-5 gap-2 flex-wrap">
      <img src={data.image} className="card-img-top detail-img" alt={data.title} />
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text word-wrap">
    {data.content}
    </p>
    <p className="card-text">
    {data.publish_date}
    </p>
    <p className="card-text">
    {data.author}
    </p>
    </div>
      
    </div>
     );
};

export default Detail;
