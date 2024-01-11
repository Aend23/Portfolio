import React, { useState } from 'react';
import "./styles/card.css";
import { useNavigate } from "react-router-dom";


export default function Card(project) {
  const [item ,setItem] = useState(project.project);
  const navigate = useNavigate();
    const handleDetails =(obj)=>{
        console.log(obj);
        navigate("/projectDetails",{state:obj})
    }
  return (
    <div className="Card"  onClick={()=>handleDetails(item)}>
    <img className="Image" src={item?.image} />
    <div className="Tags">
        {item.tags?.map((tag, index) => (
            <span className="Tag" key={index}>{tag}</span>
        ))}
    </div>
    <div className="Details">
        <div className="Title">{item.title}</div>
        <div className="Date">{project.date}</div>
        <div className="Description">{item.description}</div>
    </div>
     {/* <button className="Button">View Project</button>  */}
</div>

  )
}
