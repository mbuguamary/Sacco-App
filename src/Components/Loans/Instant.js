import React,{useState} from 'react';
import {FaSearch} from  "react-icons/fa";
import "./Instant.css";
const Instant = () => {
    const[input,setInput] = useState("")
    //  const fetchData  = (value)=>{
 
    //     fetch("")
    //     .then
    //  };
  
    return (
       <div>
        <label>member name</label>
    <div className='input-wrapper'>
      
        <FaSearch id='search-icon'/>
       <input  placeholder='Type to search....'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        
       </div>
       
       </div> 
  )
}

export default Instant