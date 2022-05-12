import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Managerpage() {
    
    let navigate = useNavigate();

    const handlePage = (event) => {
        navigate(event.target.value);
    };

  return (
      <div className = "form" >
          <h1>Manager page</h1>
        <table className = "buttons">
        
        <Button variant="contained" onClick={handlePage} name='newmodel' value='/newmodel'>Opret model</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='newmanager' value='/newmanager'>Opret manager</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='newjob' value='/newjob'>Opret job</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='addmodel' value='/addmodel'>Tilføj model til job</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='deletemodel' value='/deletemodel'>Slet model fra job</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='seejob' value='/seejob'>Se job</Button>
      
        </table>
      </div>
  )
}
