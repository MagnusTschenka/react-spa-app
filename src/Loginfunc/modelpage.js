import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Modelpage() {
    
    let navigate = useNavigate();

    const handlePage = (event) => {
        navigate(event.target.value);
    };

  return (
      <div className = "form" >
          <h1>Model page</h1>
        <table className = "buttons">
        
        <Button variant="contained" onClick={handlePage} name='modelseejob' value='/modelseejob'>See all jobs my jobs as model</Button>
      <br></br>
      <Button variant="contained" onClick={handlePage} name='modeladdexpense' value='/modeladdexpense'>add expense to job</Button>  
        </table>
      </div>
  )
}
