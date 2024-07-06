import React, { useEffect, useState } from 'react'
import './App.css';
const CopyFile = () => {
    
    
        const copyCode=()=>{
            let text=document.getElementById("copyTest").value;
            navigator.clipboard.writeText(text)
            
            
        }
       
    


  return (
    
    <div className='container'>
        <section> 
            <code>Copy Text</code>
        </section>
        <textarea id="copyTest"></textarea>
        <button onClick={copyCode}>Copy Text</button>
       
        <input placeholder='paste here'></input>
    </div>
    
  )
}

export default CopyFile
