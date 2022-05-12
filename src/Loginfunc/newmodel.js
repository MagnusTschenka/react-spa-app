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


export default function Newmodel() {

const initialmodel = {
    firstName:'',
    lastName:'', 
    email:'', 
    phoneNo:'', 
    addresLine1:'', 
    addresLine2:'', 
    zip:'', 
    city:'', 
    country:'', 
    birthDate:'', 
    nationality:'', 
    height:0, 
    shoeSize:0, 
    hairColor:'',
    eyeColor:'',
    comments:'',
    password:''};    

    const [model, setmodel] = useState(initialmodel);

    let navigate = useNavigate();

    const handlemodel = (event) => {
        setmodel((model) => ({
            ...model,
            [event.target.name]: event.target.value,

        }));
    };


async function postmodel(e) {
e.preventDefault();

var url = "https://localhost:7181/api/Models";
fetch(url, {
 method: 'POST', // Or PUT
 body: JSON.stringify(model), // assumes your data is in a
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
    <Box component="form" sx={{   '& .MuiTextField-root': { m: 1, width: '25ch' },  }} noValidate autoComplete="off">
    <div className="formModel" onSubmit={postmodel}>
      <h1>Create Model</h1>
     <form >
       <div>
       <div className="input-container">
         <TextField  id="outlined-required" label="First name*" defaultValue="First name" type="text" placeholder='First name' name="firstName" onChange={handlemodel} value={model.firstName} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Last name*" defaultValue="Last name" type="text" placeholder='Last name' name="lastName" onChange={handlemodel} value={model.lastName} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Email*" defaultValue="Email" type="text" placeholder='Email' name="email" onChange={handlemodel} value={model.email} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="phoneNo" defaultValue="phoneNo" type="text" placeholder='phoneNo' name="phoneNo"  onChange={handlemodel} required value={model.phoneNo} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="adressline1"  type="text" placeholder='adressline1' name="addressLine1" onChange={handlemodel} required value={model.addressLine1} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="adressline2"  type="text" placeholder='adressline2' name="addressLine2" onChange={handlemodel} required value={model.addressLine2} />
       </div>
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="zip" defaultValue="zip" type="text" placeholder='zip' name="zip"  onChange={handlemodel} required value={model.zip} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="city" defaultValue="city" type="text" placeholder='city' name="city" onChange={handlemodel} required value={model.city} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Country" defaultValue="Country" type="text" placeholder='Country' name="country" onChange={handlemodel} required value={model.country} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Birth date" defaultValue="Birth date" type="text" placeholder='Birth date' name="birthDate"  onChange={handlemodel} required value={model.birthDate} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="nationality" defaultValue="nationality" type="text" placeholder='nationality' name="nationality" onChange={handlemodel} required value={model.nationality} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="height" defaultValue="height" type="number" placeholder='height' name="height" onChange={handlemodel} required value={model.height} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="shoeSize" defaultValue="shoeSize" type="number" placeholder='shoeSize' name="shoeSize"  onChange={handlemodel} required value={model.shoeSize} />
         </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="haircolor" defaultValue="" type="text" placeholder='haircolor' name="hairColor"  onChange={handlemodel} required value={model.hairColor} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="eyeColor" defaultValue="eyeColor" type="text" placeholder='eyeColor' name="eyeColor" onChange={handlemodel} required value={model.eyeColor} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="comments" defaultValue="comments" type="text" placeholder='comments' name="comments"  onChange={handlemodel} required value={model.comments} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="password" defaultValue="password" type="password" placeholder='password' name="password"  onChange={handlemodel} required value={model.password} />
       </div>
       <div className="button-container">
         <Button variant="contained" endIcon={<PersonAddAlt1Icon/>} type="submit">Create Model</Button>
       </div>

     </form>

     </div>
     </Box>
  )
}
