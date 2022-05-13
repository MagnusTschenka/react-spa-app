import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import { style } from '@mui/system';
import './style.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import KeyIcon from '@mui/icons-material/Key';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export function LoginForm() {
    const initialstate = {Email:'',
    Password:''};    
const [loginUser, setloginUser] = useState(initialstate)

let navigate = useNavigate();

const handleUsernameChanged = (event) => {
    setloginUser((loginUser) => ({
        ...loginUser,
        Email: event.target.value,
    }));
};


const handlePasswordChanged = (event) => {
    setloginUser((loginUser) => ({
        ...loginUser,
        Password: event.target.value,
    }));
};


   
    async function login(e) {
        e.preventDefault();
        let url = "https://localhost:7181/api/account/login";
        try {
            let response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(loginUser), // Assumes data is in an object called form
                headers: new Headers({
                    "Content-Type": "application/json"
                })
            });
            if (response.ok) {
                let token = await response.json();
                localStorage.setItem("token", token.jwt);
                // Change view to some other component
                let decoded= jwt_decode(token.jwt);
              //  localStorage.setItem("ModelId",decoded);
           

                if (decoded.ModelId === '-1') {
                    navigate("/managerPage");
                    console.log("Hej");
                }
                else if (decoded.ModelId >= '0') {
                    navigate("/modelPage");
                    
                }
              
            } else {
                alert("Server returned: " + response.statusText);
            }
        } catch (err) {
            alert("Error: " + err);
        }
        return;
        
    }
    return(
        <Box component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
            
        <div className="form" onSubmit={login}>
        <h1 className="signin">Sign in</h1>
     <form >
       <div className="input-container">
         <TextField  id="outlined-required" label="Username*" defaultValue="Username" type="text" placeholder='Username' name="Username" onChange={handleUsernameChanged} value={loginUser.Email} />
       </div>
       <div className="input-container">
         <TextField  id="outlined-required" label="Password" defaultValue="Password" type="password" placeholder='Password' name="Password" onChange={handlePasswordChanged} required value={loginUser.Password} />
       </div>
       <div className="button-container">
         <Button variant="contained" endIcon={<KeyIcon />}  type="submit" onClick={login}>Login</Button>
       </div>

     </form>

     </div>
     </Box>
    )
}
