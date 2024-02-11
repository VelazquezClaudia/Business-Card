import React from "react";
import { FaGithubSquare, FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Info() {
  return (
    <IconContext.Provider value={{color: "#918E9B", size: "1.5em", padding: "35px" }}>
    <>
    <div className="footer">
     <FaTwitterSquare className="fa fa-brands fa-icons"/>
     <FaFacebookSquare className="fa fa-brands fa-icons"/>
     <FaInstagramSquare className="fa fa-brands fa-icons"/>
     <FaGithubSquare className="fa fa-brands fa-icons"/>
    </div>
    </>
    </IconContext.Provider>
  )
}