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

export default function Newjob() {

const initialjob = {
    customer:'',
    startDate:'', 
    days: 0, 
    location:'',
    comments: ''};    

    const [job, setjob] = useState(initialjob);

    let navigate = useNavigate();

    const handlejob = (event) => {
        setjob((job) => ({
            ...job,
            [event.target.name]: event.target.value,

        }));
    };


async function postjob(e) {
e.preventDefault();

var url = "https://localhost:7181/api/Jobs";
fetch(url, {
 method: 'POST', // Or PUT
 body: JSON.stringify(job), // assumes your data is in a
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
    
    <div className="form" onSubmit={postjob}>
      <h1>Create new job</h1>
      <Box component="form" sx={{   '& .MuiTextField-root': { m: 1, width: '25ch' },  }} noValidate autoComplete="off">
       <div className="input-container">

         <TextField  id="outlined-required" label="Customer*"  type="text" placeholder='Customer' name="customer" onChange={handlejob} value={job.customer} />
         
       </div>
       <div className="input-container">

         <TextField  id="outlined-required"   type="date" name="startDate" onChange={handlejob} value={job.startDate} />
       </div>
       <div className="input-container">

         <TextField  id="outlined-required" label="Days*" type="number" placeholder='Days' name="days" onChange={handlejob} value={job.days} />
       </div>
       <div className="input-container">

         <TextField  id="outlined-required" label="Location"  type="text" placeholder='Location' name="location"  onChange={handlejob} required value={job.location} />
       </div>
       <div className="input-container">

         <TextField  id="outlined-required" label="Comments"  type="text" placeholder='Comments' name="comments" onChange={handlejob} required value={job.comments} />
       </div>
       <div className="button-container">
         <Button variant="contained" endIcon={<SendIcon />}  type="submit" >Create new Job</Button>
       </div>

     </Box>

     </div>
    
  )
}
