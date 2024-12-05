import React from "react";
import { useState } from "react";
import "@components/Collapse.css";
import Arrow from "@/assets/arrow_down.svg"

const Collapse = ({ title, children }) => {
const [isOpen, setIsOpen] = useState(false)

const toggleCollapse = () => { 
  setIsOpen(!isOpen) 
}
  
  

  return (
    <div className="CollapseComponent">
      <div className="CollapseElement">
        <button onClick={toggleCollapse} type="button" className="Button">
        {title} <span className={`icon ${isOpen ? 'rotate' : ''}`}><img src={Arrow}/></span> 
        </button>
        {isOpen && <div className="Content">{children}</div>}
          
        
      </div>
    </div>
  );
};

export default Collapse;
