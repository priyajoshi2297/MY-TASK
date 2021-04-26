import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (


<>
<div className="topnav" id="myTopnav">
  <Link className="navbar-brand" to="/">
  Home     
  </Link>
  <Link to="/addUser" className="btn btn-dark">
      Create New User
  </Link>
</div>
</>


    
 );
};

export default Navbar;
