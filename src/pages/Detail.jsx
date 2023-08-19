import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();

  const BASE_URL = "http://33499.fullstack.clarusway.com/";
  const [data, setData] = useState([]);
  const getDetailCard = async () => {
    try {
      const { data } = await axios(`${BASE_URL}api/blogs/${id}/`);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailCard();
  }, []);

  return <div>Detail</div>;
};

export default Detail;
