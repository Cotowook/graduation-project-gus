import {React,useState,useEffect} from 'react';
import axios from "axios";
import {useParams} from 'react-router-dom';
import './Content.css'
import Writer from './Writer';
function Content(props) {

    const {id}=useParams();
const [names,setNames]=useState(null);

useEffect(()=>{
  axios.get(`http://localhost:4000/names/${id}`)
  .then((response)=>{
   setNames(response.data);
    })
},[id]);
if (!names) {
  return <div>Loading...</div>;
}

   
    return (
        <div className="content">
             
           <div className="content_body">
          
           <div className="content_title">
            <div className="content_title_pic"></div>
            <div>
                <div className="content_title_title">{names.title}</div>
                <div className="content_title_name">작성자:{names.writer}</div>
            </div>
          
            </div>  
                
            <div className="content_content">{names.body}</div>  


<Writer/>
         
           </div>
    

          
           
        </div>
    );
}

export default Content;