import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";


export default function Managerpage() {
    
    let navigate = useNavigate();

    const handlePage = (event) => {
        navigate(event.target.value);
    };

  return (
      <div >
      <button onClick={handlePage} name='newmodel' value='/newmodel'>Opret model</button>
      <button onClick={handlePage} name='newmanager' value='/newmanager'>Opret manager</button>
      <button onClick={handlePage} name='newjob' value='/newjob'>Opret job</button>
      <button onClick={handlePage} name='addmodel' value='/addmodel'>Tilføj model til job</button>
      <button onClick={handlePage} name='deletemodel' value='/deletemodel'>Slet model fra job</button>
      <button onClick={handlePage} name='seejob' value='/seejob'>Se job</button>
      </div>
  )
}
