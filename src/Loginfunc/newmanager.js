import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";


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
    <div className="form" onSubmit={postmanager}>
     <form >
       <div className="input-container">
         <label>First name </label>
         <input type="text" name="firstName" required onChange={handlemanager} value={manager.firstName} />
       </div>
       <div className="input-container">
         <label>Last name </label>
         <input type="text" name="lastName" required  onChange={handlemanager} value={manager.lastName} />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="email" required onChange={handlemanager} value={manager.email} />
       </div>
       <div className="input-container">
         <label>password </label>
         <input type="password" name="password"  onChange={handlemanager} required value={manager.password} />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>

     </form>

     </div>
  )
}
