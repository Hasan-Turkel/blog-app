import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({image, title, content, publish_date, author, id}) => {
  const navigate= useNavigate()

    

    // console.log(data);
  return (
    <div className="card p-4" style={{ width: "18rem" }}>
  <img src={image} className="card-img-top h-25 card-img" alt={title} />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
    {content.slice(0,50)}...
    </p>
    <p className="card-text">
    {publish_date}
    </p>
    <p className="card-text">
    {author}
    </p>
    <div>


    <button  className="btn btn-primary" onClick={()=>navigate(`detail/${id}`)}>
      Read More
    </button>
    </div>
   
  </div>
</div>

  )
}

export default Card