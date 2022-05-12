import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";


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


    // function handleInputChange(event) {
    //     let userName2 = event.userName;
    //     let userPass = event.userPass;

    //     setloginUser(loginUser => {
    //         return {
    //           ...loginUser,
    //           [userName]: loginUser,
    //         //   [loginUser.userPass]: userPass
            
    //     };

//     });
// }
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
                
                navigate("/managerPage");
                
                // let url = "https://localhost:7181/api/account/login";
                // let response = await fetch(url, {
                //     method: "GET",
                //     body: JSON.stringify(loginUser), // Assumes data is in an object called form
                //     headers: new Headers({
                //         "Content-Type": "application/json"
                //     })
                // });
                // ...
            } else {
                alert("Server returned: " + response.statusText);
            }
        } catch (err) {
            alert("Error: " + err);
        }
        return;
        
    }
    return(
        <div className="form" onSubmit={login}>
     <form >
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required onChange={handleUsernameChanged} value={loginUser.Email} />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass"  onChange={handlePasswordChanged} required value={loginUser.Password} />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>

     </form>

     </div>
    )
}
