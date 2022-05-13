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
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function Deletemodel() {

  const initialstate = {
    jobId: '',
    modelId: ''};

    const [modeltodeletefromjob, setModeltodeletefromjob] = useState(initialstate);

    let navigate = useNavigate();

    const handleModeltodelete = (event) => {
        setModeltodeletefromjob((modeltodeletefromjob) => ({
            ...modeltodeletefromjob,
            [event.target.name]: event.target.value,

        }));
    };


    async function deletemodelfromjob(){
      var url = "https://localhost:7181/api/Jobs/"+ modeltodeletefromjob.jobId +"/model/"+ modeltodeletefromjob.modelId;
      console.log(url);
      fetch(url, {
       method: 'DELETE', // Or DELETE
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
    <Box component="form"  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off" className="form" onSubmit={deletemodelfromjob}>
       <h1>Remove model from a job</h1>
     <div className="input-container">
       < TextField  id="outlined-required" label="JobId*"  type="number" placeholder='JobId' name="jobId" onChange={handleModeltodelete} value={modeltodeletefromjob.jobId} />
     </div>
     <div className="input-container">
       <TextField  id="outlined-required" label="modelId*"  type="number" placeholder='modelId' name="modelId"  onChange={handleModeltodelete} value={modeltodeletefromjob.modelId} />
     </div>
     <div className="button-container">
       <Button variant="contained" endIcon={<PersonRemoveIcon />} type="submit">Remove model from job</Button>
     </div>

   </Box>
  )
}



