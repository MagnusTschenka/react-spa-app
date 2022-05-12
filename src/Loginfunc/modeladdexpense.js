import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";
import { style } from '@mui/system';
import './style.css';

export default function modeladdexpense() {



    async function addexpense(e) {
        e.preventDefault();
        
        var url = "https://localhost:7181/api/Expenses";
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
    <div>modeladdexpense</div>
  )
}
