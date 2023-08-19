import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
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
      <div className="navbar-nav">
        <NavLink className="nav-link active" aria-current="page" to="#">
          Dashoard
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="#">
          New Blog
        </NavLink>
        <NavLink className="nav-link active" aria-current="page" to="#">
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
    <img src="https://i.stack.imgur.com/lAwxR.png" class="rounded-circle" style={{width: "40px"}}
  alt="Avatar" />
  </a>
  <ul className="dropdown-menu " >
    <li>
      <a className="dropdown-item" href="#">
        Link
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another 
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        A third
      </a>
    </li>
  </ul>
</li>
 </div>
  
</nav>



  )
}

export default Navbar