import React from "react";
import './Community.css';
import logo from '../img/mainlogo.jpg';
import {Link,Route,Routes} from 'react-router-dom';
import {FiSearch} from "react-icons/fi";
import Cmain from "./Cmain";
import Cbest from "./Cbest";
import Content from "./Content";

export default function Community() {

  return <div className="Community">
  <div className="c_header">
  <div className="c_left">
    <Link to="/" ><img  className="c_logo" src={logo} alt="logo"/></Link>
    </div>
  <div className="c_center">
  <input className="c_input" placeholder="무엇이 궁금하세요?"/>
    <button className="c_button"><FiSearch/></button>
  
    </div>
  <div className="c_right">
  <Link to="/Login" style={{ textDecoration: "none" ,color:"black"}}><div className="c_log">LOGIN</div></Link>
          <Link to="/Signup" style={{ textDecoration: "none" ,color:"black"}}><div className="c_log">SIGN UP</div></Link>
    </div>
    </div>
 
  


<Routes>
  <Route path="/:id" element={<Content/>}/>
          <Route path="/*" element={<Cmain/>} />
          <Route path="Cbest" element={<Cbest/>} />
        </Routes>


  </div>;
}
