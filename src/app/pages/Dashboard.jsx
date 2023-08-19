import axios from "axios"
import { useEffect, useState } from "react"


const Dashboard = () => {
const BASE_URL= "http://33499.fullstack.clarusway.com/"
const [data, setData] = useState([])
const getCard = async() => {
  const {data} = await axios(`${BASE_URL}api/blogs`)
  setData(data)
}
console.log(data);
useEffect(() => {
  getCard()

}, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard