import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import { style } from '@mui/system';
import './style.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function Newmanager() {

const initialmanager = {
    firstName:'',
    lastName:'', 
    email:'', 
    password:''};    

    const [manager, setManager] = useState(initialmanager);

    let navigate = useNavigate();

    const handlemanager = (event) => {
        setManager((manager) => ({
            ...manager,
            [event.target.name]: event.target.value,

        }));
    };


async function postmanager(e) {
e.preventDefault();

var url = "https://localhost:7181/api/Managers";
fetch(url, {
 method: 'POST', // Or PUT
 body: JSON.stringify(manager), // assumes your data is in a
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
 navigate('/managerPage');
}
  return (

    <Box component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off" className="form" onSubmit={postmanager}>
      <h1>Create new manager</h1>
     <form >
       <div className="input-container">
         < TextField  id="outlined-required" label="First name*" defaultValue="First name" type="text" placeholder='First name' name="firstName" onChange={handlemanager} value={manager.firstName} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Last name*" defaultValue="'Last' name" type="text" placeholder='Last name' name="lastName"  onChange={handlemanager} value={manager.lastName} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Email*" defaultValue="Email" type="text" placeholder='Email' name="email" onChange={handlemanager} value={manager.email} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Password" defaultValue="Password"  placeholder='Password' type="password" name="password"  onChange={handlemanager} required value={manager.password} />
       </div>
       <div className="button-container">
         <Button variant="contained" endIcon={<PersonAddAlt1Icon />} type="submit">Create new manager</Button>
       </div>

     </form>

     </Box>
  )
}


 
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        
