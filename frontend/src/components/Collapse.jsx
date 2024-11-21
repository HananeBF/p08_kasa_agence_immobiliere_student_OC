import React from "react";
import { useState } from "react";
import "@components/Collapse.css";

const Collapse = ({ title, children }) => {
const [isOpen, setIsOpen] = useState(false);

const toggleCollapse = () => { setIsOpen(!isOpen) }
  
  

  return (
    <div className="CollapseComponent">
      <div className="CollapseElement" id="CollapseElement">
        <button onClick={toggleCollapse} type="button" className="Button">
        {title} {isOpen ? <span className="Open">&#x2304;</span> : <span className="Close">&#x2303;</span> }
        </button>
        {isOpen && <div className="Content">{children}</div>}
          
        
      </div>
    </div>
  );
};

export default Collapse;
