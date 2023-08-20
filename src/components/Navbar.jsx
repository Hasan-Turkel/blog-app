import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth)
  const { logout } = useAuthCalls()

  return (
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <NavLink className="navbar-brand" to="/">
      <h2>BLOG-APP</h2>
    </NavLink>
    <button
      className="navbar-toggler me-auto"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink className="nav-link active" aria-current="page" to="/">
          Dashoard
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="/new-blog">
          New Blog
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="about">
          About
        </NavLink>
      </div>
    </div>
    <li className="nav-item dropdown me-5">
  <a
    className="nav-link dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    <img src="https://i.stack.imgur.com/lAwxR.png" className="rounded-circle" style={{width: "40px"}}
  alt="Avatar" />
  </a>

  {!user?(<ul className="dropdown-menu " >
    <li>
      <NavLink className="dropdown-item" to="login">
       Login
      </NavLink>
    </li>
    </ul>):(
  <ul className="dropdown-menu " >
    <li>
      <NavLink className="dropdown-item" to="my-blogs">
        My Blogs
      </NavLink>
    </li>
    <li>
      <NavLink className="dropdown-item" to="profile">
        Profile 
      </NavLink>
    </li>
    <li>
      <p className="dropdown-item" role="button" onClick={()=>logout()}>
      Logout </p>
    </li>
  </ul>)}
</li>
 </div>
  
</nav>

  )
}

export default Navbar