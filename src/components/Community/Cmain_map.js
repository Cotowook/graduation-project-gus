import './Cmain_map.css';
import {React,useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
 import loone from '../img/loone.png';
 import lotwo from '../img/lotwo.png';
  import lothree from '../img/lothree.png';
const Cmain_map=()=>{
   const [name,setName]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/names")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          setName(data);
        });
    },[]);
    return (
          <>
            {name.map(names=>(
               
            <div className="crud_first">
          
                    <h3>{names.title} </h3>
                    <div className="crud_img">
                   <img src={loone} alt="ad"/>
                   </div>
                    <div className="crud_list">{names.body}</div>
                    <div className="crud_list">작성자:{names.writer}</div>
                    <div className="crud_button">
                   
                    <button><Link to={`/Community/${names.id}`} style={{ textDecoration: "none" ,color:"black"}}>게시물 보러 가기 </Link></button>
                    
                    </div> 
                    
                </div>
               
                   ))}
                   </>
                   
        
    );
}

export default Cmain_map;