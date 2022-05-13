import React from 'react'
import { style } from '@mui/system';
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import './style.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import KeyIcon from '@mui/icons-material/Key';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function Addmodel() {

    const initialstate = {
        jobId: '',
        modelId: ''};
    
        const [modeltojob, setModeltojob] = useState(initialstate);
    
        let navigate = useNavigate();
    
        const handleModeltojob = (event) => {
            setModeltojob((modeltojob) => ({
                ...modeltojob,
                [event.target.name]: event.target.value,
                
            }));
        };



    async function Addmodeltojob(e)
    {
        e.preventDefault();
    var url = "https://localhost:7181/api/Jobs/"+ modeltojob.jobId +"/model/" + modeltojob.modelId;
    console.log(url);
    fetch(url, {
     method: 'POST', // Or PUT
     body: JSON.stringify(), // assumes your data is in a
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
    <Box component="form"  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" className="form" onSubmit={Addmodeltojob}>
       <h1>Add model to a job</h1>
     <div className="input-container">
       < TextField  id="outlined-required" label="JobId*"  type="number" placeholder='JobId' name="jobId" onChange={handleModeltojob} value={modeltojob.jobId} />
     </div>
     <div className="input-container">
       <TextField  id="outlined-required" label="modelId*"  type="number" placeholder='modelId' name="modelId"  onChange={handleModeltojob} value={modeltojob.modelId} />
     </div>
     <div className="button-container">
       <Button variant="contained" endIcon={<PersonAddAlt1Icon />} type="submit">Add Model to job</Button>
     </div>

   </Box>
  )
}




