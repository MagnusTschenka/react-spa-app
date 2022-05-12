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
      <h1>List of all Jobs</h1>
      <table className='table'>

        <ol>

          {jobs.map((j,index) => (

              <li key={j.id}>  
                  {j.customer},
                  {j.startDate},
                  {j.comments},
                  {j.location},
                  {j.days}
              </li>

          ))}

        </ol>
        </table>
    </div>

  );
}
