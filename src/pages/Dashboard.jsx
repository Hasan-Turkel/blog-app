import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/blog/Card"


const Dashboard = () => {
const BASE_URL= "http://33499.fullstack.clarusway.com/"
const [data, setData] = useState([])
const getCard = async() => {
  const {data} = await axios(`${BASE_URL}api/blogs`)
  setData(data)
  console.log(data);
}

useEffect(() => {
  getCard()

}, [])

  return (
    <div className="row justify-content-center my-5 gap-4">
      {data?.map((item)=>(<div className="col-9 col-md-4 col-lg-3"><Card  key={item.id} {...item} /></div>))}
    </div>

    
  )
}

export default Dashboard