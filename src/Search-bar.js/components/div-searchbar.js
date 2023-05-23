import React, {useState} from 'react'
 import './div-search.css'
 
export default function Searchbar({setResults}) {
  const[input,setInput]=useState("");

  const fetchData = (value) => {
    fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
      .then((data) => {
        const { states } = data; // Access the 'states' property
  
        const results = states.filter((state) => {
          return value&&
          state.state_name &&
          
           state.state_name.toLowerCase().includes(value);
        });
  
        setResults(results);
      });
  };
  
  



  const handleChange=(value)=>{
    setInput(value)
    fetchData(value)
  };

  

  return (
    <div className='input-wrapper'>
         <span className='span'>&#x1F50D;</span>
         <input placeholder='Search Google or type a URL'value={input} onChange={(e)=>handleChange(e.target.value)} />
         
    </div>
  )
}
