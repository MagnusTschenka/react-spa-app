import React from 'react';
import {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from 'jwt-decode';

export default function Modelseejobs() {

const [jobs, setjobs] = useState([]);

let navigate = useNavigate();

useEffect(() => {
    async function seejobs() {
      
       var url = "https://localhost:7181/api/Jobs";
        console.log(url);
        fetch(url, {
         method: 'GET', // Or DELETE
         credentials: 'include',
         headers: {
         'Authorization': 'Bearer ' + localStorage.getItem("token"),
         'Content-Type': 'application/json'
         }
         }).then(async data => {
          const jobs = await data.json();
          setjobs(jobs);
         
         })
         
         .catch(error => alert('Something bad happened: ' + error));
        }    
    seejobs();

  }, [])



 if(jobs.length === 0)
 {
   return <div>loading data</div>
 } 

return (

    <div className='form'>
      <h1>List of all Jobs <br></br> Model page</h1>
      <table className='table'>

        <ol>

          {jobs.map((j,index) => (

              <li key={j.jobId}>  
                  {j.jobId},
                  {j.customer},
                  {j.startDate},
                  {j.days},
                  {j.location},
                  {j.comments},
                  
              </li>

          ))}

        </ol>
        </table>
    </div>

  );
}
