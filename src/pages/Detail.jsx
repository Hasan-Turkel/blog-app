import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineHeart} from 'react-icons/ai';
import { BiComment} from 'react-icons/bi';


const Detail = () => {
  const { id } = useParams();
  const {token} = useSelector((state)=>state.auth)
  const {user} = useSelector((state)=>state.auth)

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
    <div className="container d-flex flex-column  m-5 gap-2 ">
      <img src={data.image} className="card-img-top detail-img" alt={data.title} />
   <div className="card-body ">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text word-wrap">
    {data.content}
    </p>
    <p className="card-text">
    {data.publish_date}
    </p>
    <p className="card-text"><BsFillPersonFill className='fs-2'/>
    {data.author}
    </p>
    <div className='d-flex align-items-center gap-2 '>
<AiOutlineHeart className='fs-4'/>
<span>{data.likes}</span>
<BiComment className='fs-4'/>
<span>{data.comment_count}</span>
<AiOutlineEye className='fs-4'/>
<span>{data.post_views}</span>
    </div>

    {user.username==data.author&&(<div><button className="btn btn-primary m-4">Update</button>
    <button className="btn btn-danger m-4">Delete</button></div>)}
    
    </div>
    
      
    </div>
     );
};

export default Detail;