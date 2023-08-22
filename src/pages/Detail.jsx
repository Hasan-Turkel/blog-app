import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineEye, AiFillHeart} from 'react-icons/ai';
import { BiComment} from 'react-icons/bi';
import CommentCard from "../components/blog/CommentCard";
import useBlogCalls from "../hooks/useBlogCalls";
import DeleteModal from "../components/blog/DeleteModal";
import UpdateModal from "../components/blog/UpdateModal";



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
  const {likeUnlike} = useBlogCalls()
 
  const handleClick=()=>{
    likeUnlike(id)
    setTimeout(() => {
      getDetailCard();
  }, 1000);
  }
 
  

  const like = data?.likes_n?.filter((item=> item.user_id==user?.id)).length&&"text-danger"
  return (
    <div className="container d-flex flex-column  m-5 gap-2 ">
      <img src={data.image} className="card-img-top detail-img" alt={data.title} />
   <div className="card-body ">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text word-wrap">
    {data.content}
    </p>
    <p className="card-text">
    {new Date(data.publish_date).toLocaleString({
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}
    </p>
    <p className="card-text"><BsFillPersonFill className='fs-2'/>
    {data.author}
    </p>
    <div className='d-flex align-items-center gap-2 mb-2 '>
<AiFillHeart className={"fs-4 " + (like)} role="button" onClick={handleClick}/>
<span>{data.likes}</span>
<BiComment className='fs-4'/>
<span>{data.comment_count}</span>
<AiOutlineEye className='fs-4 '/>
<span>{data.post_views}</span>
    </div>

    {user?.username==data?.author&&(<div><button className="btn btn-primary m-4" data-bs-toggle="modal"
      data-bs-target="#update">Update</button>

    <button className="btn btn-danger m-4"  data-bs-toggle="modal"
      data-bs-target="#del" >Delete</button></div>)}

    <DeleteModal id={id}/>
    <UpdateModal id={id} data={data} getDetailCard={getDetailCard}/>

    {data?.comments?.map((item)=> <div key={item.id} className="mb-2">
      <p className="m-0">{item.content}</p>
      <p className="m-0">{item.user}</p>
      <p className="m-0">{new Date(item.time_stamp).toLocaleString({
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                })}</p>
      <hr />

      </div>
      
    )}

   
    <CommentCard id={data.id} getDetailCard={getDetailCard}/>
    </div>

    
    </div>
     );
};

export default Detail;
