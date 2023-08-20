import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = ({data, i}) => {
  const navigate= useNavigate()

    

    // console.log(data);
  return (
    <div className="card" style={{ width: "18rem" }}>
  <img src={data[i].image} className="card-img-top" alt={data[i].title} />
  <div className="card-body">
    <h5 className="card-title">{data[i].title}</h5>
    <p className="card-text">
    {data[i].content}
    </p>
    <p className="card-text">
    { data[i].publish_date}
    </p>
    <p className="card-text">
    { data[i].author}
    </p>
    <div>


    <button  className="btn btn-primary" onClick={()=>navigate(`detail/${data[i].id}`)}>
      Read More
    </button>
    </div>
   
  </div>
</div>

  )
}

export default Card