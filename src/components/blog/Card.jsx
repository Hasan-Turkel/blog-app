import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineEye, AiOutlineHeart} from 'react-icons/ai';
import { BiComment} from 'react-icons/bi';

const Card = ({image, title, content, publish_date, author, id, comment_count, likes, post_views}) => {
  const navigate= useNavigate()

    

    // console.log(data);
  return (
    <div className="card p-4" style={{ width: "300px", height:"70vh" }}>
  <img src={image} className="card-img-top h-25 card-img" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
    {content.slice(0,50)}...
    </p>
    <p className="card-text">
    {publish_date}
    </p>
    <p className="card-text"> <BsFillPersonFill className='fs-2'/>
    {author}
    </p>
    <div>

<div className='d-flex align-items-center gap-2 '>
<AiOutlineHeart className='fs-4'/>
<span>{likes}</span>
<BiComment className='fs-4'/>
<span>{comment_count}</span>
<AiOutlineEye className='fs-4'/>
<span>{post_views}</span>

    
    </div>
    
  <button  className="btn btn-primary mt-2 " onClick={()=>navigate(`/detail/${id}`)}>
      Read More
    </button>
    
    </div>
   
  </div>
</div>

  )
}

export default Card