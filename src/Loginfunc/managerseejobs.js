import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";


export default function Managerseejobs() {

const [jobs, setjobs] = useState([]);

let navigate = useNavigate();

useEffect(() => {
    async function seejobs() {
        var url = "https://localhost:7181/api/Jobs";
        fetch(url, {
         method: 'GET', // Or DELETE
         credentials: 'include',
         headers: {
         'Authorization': 'Bearer ' + localStorage.getItem("token"),
         'Content-Type': 'application/json'
         }
         }).then(responseJson => {
         this.response = responseJson;
         })
         .then(data => setjobs(data))
         .catch(error => alert('Something bad happened: ' + error));
        }    
    seejobs();

  }, [])



  

return (

    <div>


        <ul>

          {jobs.map(j => (

              <li key={j.id}>  
                  {j.customer},
                  {j.startDate},
                  {j.comments},
                  {j.location},
                  {j.days}
              </li>

          ))}

        </ul>

    </div>

  );
}
