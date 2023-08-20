import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/blog/Card"


const Dashboard = () => {
const BASE_URL= "http://33499.fullstack.clarusway.com/"
const [data, setData] = useState([])
const getCard = async() => {
  const {data} = await axios(`${BASE_URL}api/blogs`)
  setData(data)
}

useEffect(() => {
  getCard()

}, [])

  return (
    <div className="d-flex justify-content-center gap-4 my-5">
      {data?.map((item, i)=>(<Card key={item.id} {...item} />))}
    </div>
  )
}

export default Dashboard