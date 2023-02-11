import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"></img>

        <div className="user">
          <img src="https://images.pexels.com/photos/14800043/pexels-photo-14800043.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"></img>

          <div className="info">
            <span>Santosh</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`write?edit=2`}>
              <FaTrash style={{ width: "40px", height: "20px" }} />
            </Link>
            <FaEdit style={{ width: "40px", height: "20px"  }} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p style={{letterSpacing:"'2px",textAlign:"justify",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /><br />
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /><br />
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br /><br /><br /><br />
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.<br /><br /> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className="menu"><Menu /></div>
    </div>
  );
};

export default Single;
