import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
// import PrivateRouter from "./PrivateRouter"
import Dashboard from "../pages/Dashboard"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import NewBlog from "../pages/NewBlog"
import About from "../pages/About"
import MyBlogs from "../pages/myBlogs"
import Profile from "../pages/Profile"


const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login/>} />
        <Route path="new-blog" element={<NewBlog />} />
        <Route path="about" element={<About />} />
        <Route path="my-blogs" element={<MyBlogs />} />
        <Route path="profile" element={<Profile />} />
        {/* <Route path="" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
          </Route>
        </Route>  */}
         
      </Routes>
      <Footer/>
    </Router>
  )
}

export default AppRouter
