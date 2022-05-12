import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";


export default function Newjob() {

const initialjob = {
    customer:'',
    startDate:'', 
    days: 0, 
    location:'',
    comments: ''};    

    const [job, setjob] = useState(initialjob);

    let navigate = useNavigate();

    const handlejob = (event) => {
        setjob((job) => ({
            ...job,
            [event.target.name]: event.target.value,

        }));
    };


async function postjob(e) {
e.preventDefault();

var url = "https://localhost:7181/api/Jobs";
fetch(url, {
 method: 'POST', // Or PUT
 body: JSON.stringify(job), // assumes your data is in a
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
    <div className="form" onSubmit={postjob}>
     <form >
       <div className="input-container">
         <label>Customer </label>
         <input type="text" name="customer" required onChange={handlejob} value={job.customer} />
       </div>
       <div className="input-container">
         <label>StartDate </label>
         <input type="date" name="startDate" required  onChange={handlejob} value={job.startDate} />
       </div>
       <div className="input-container">
         <label>Days </label>
         <input type="number" name="days" required onChange={handlejob} value={job.days} />
       </div>
       <div className="input-container">
         <label>Location </label>
         <input type="text" name="location"  onChange={handlejob} required value={job.location} />
       </div>
       <div className="input-container">
         <label>Comments </label>
         <input type="text" name="comments"  onChange={handlejob} required value={job.comments} />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>

     </form>

     </div>
  )
}
