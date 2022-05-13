import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import { style } from '@mui/system';
import './style.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AttachMoney from '@mui/icons-material/AttachMoney';

export default function Modeladdexpense() {
 let token = localStorage.getItem("token");
 let decoded = jwt_decode(token);
  const initialexpense = 
    {
      modelId: decoded.ModelId,
      jobId: 0,
      date: '',
      text: '',
      amount: 0
    };    

    const [expense, setExpense] = useState(initialexpense);

    let navigate = useNavigate();

    const handleexpense = (event) => {
        setExpense((expense) => ({
            ...expense,
            modelId: decoded.ModelId,
            [event.target.name]: event.target.value,

        }));
    };




    async function addexpense(e) {
        e.preventDefault();
        console.log(expense);
        console.log(decoded);
        var url = "https://localhost:7181/api/Expenses";
        fetch(url, {
         method: 'POST', // Or PUT
         body: JSON.stringify(expense), // assumes your data is in a
         // form object on your instance.
         credentials: 'include',
         headers: {
         'Authorization': 'Bearer ' + localStorage.getItem("token"),
         'Content-Type': 'application/json'
         }
         }).then(responseJson => {
         this.response = responseJson;
         })
         .catch(error => alert('Something bad happened: ' + error));
        }

  return (
    
     <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off" className="form" onSubmit={addexpense}>
         <h1>Add expense to job</h1>
       <div className="input-container">
         <TextField  id="outlined-required" label="jobId*"  type="number" placeholder='jobId' name="jobId"  onChange={handleexpense} value={expense.jobId} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required"  type="date"  name="date" onChange={handleexpense} required value={expense.data} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="text"   placeholder='text' type="text" name="text"  onChange={handleexpense} required value={expense.text} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="amount"   placeholder='amount' type="number" name="amount"  onChange={handleexpense} required value={expense.amount} />
       </div>
       <div className="button-container">
         <Button variant="contained" endIcon={<AttachMoney/>} type="submit">Add expense to job</Button>
       </div>

     </Box>
  )
}
