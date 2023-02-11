import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">DunkinPeanuts</div>
        <div className="links">
        <Link className="link" to="/?cat=art"><h6>ART</h6></Link>
        <Link className="link" to="/?cat=cinema"><h6>CINEMA</h6></Link>
        <Link className="link" to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
        <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
        <Link className="link" to="/?cat=food"><h6>FOOD</h6></Link>
        <div style={{display:"flex" ,justifyContent:"space-between",padding:"5px",marginTop:"28px", gap:"5px"}}>
         <span className="link" style={{fontWeight:"200px"}}>Santosh</span>
         <span className="link" >logout</span>
         
         </div>
         <span className="write link" style={{marginTop:"25px"
        }}>
         <Link to="/write" className="link">Write</Link>
         </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
