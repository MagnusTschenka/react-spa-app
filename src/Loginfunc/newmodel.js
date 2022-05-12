import React from 'react'
import {useState} from 'react'
import {useNavigate} from "react-router-dom";


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
    <div className="form" onSubmit={postmodel}>
     <form >
       <div className="input-container">
         <label>First name </label>
         <input type="text" name="firstName" required onChange={handlemodel} value={model.firstName} />
       </div>
       <div className="input-container">
         <label>Last name </label>
         <input type="text" name="lastName" required  onChange={handlemodel} value={model.lastName} />
       </div>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="email" required onChange={handlemodel} value={model.email} />
       </div>
       <div className="input-container">
         <label>PhoneNo </label>
         <input type="text" name="phoneNo"  onChange={handlemodel} required value={model.phoneNo} />
       </div>
       <div className="input-container">
         <label>AddressLine1 </label>
         <input type="text" name="addressLine1"  onChange={handlemodel} required value={model.addressLine1} />
       </div>
       <div className="input-container">
         <label>AddressLine2 </label>
         <input type="text" name="addressLine2"  onChange={handlemodel} required value={model.addressLine2} />
       </div>
       <div className="input-container">
         <label>Zip </label>
         <input type="text" name="zip"  onChange={handlemodel} required value={model.zip} />
       </div>
       <div className="input-container">
         <label>City </label>
         <input type="text" name="city"  onChange={handlemodel} required value={model.city} />
       </div>
       <div className="input-container">
         <label>Country </label>
         <input type="text" name="country"  onChange={handlemodel} required value={model.country} />
       </div>
       <div className="input-container">
         <label>BirthDate </label>
         <input type="date" name="birthDate"  onChange={handlemodel} required value={model.birthDate} />
       </div>
       <div className="input-container">
         <label>nationality </label>
         <input type="text" name="nationality"  onChange={handlemodel} required value={model.nationality} />
       </div>
       <div className="input-container">
         <label>height </label>
         <input type="number" name="height"  onChange={handlemodel} required value={model.height} />
       </div>
       <div className="input-container">
         <label>shoeSize </label>
         <input type="number" name="shoeSize"  onChange={handlemodel} required value={model.shoeSize} />
       </div>
       <div className="input-container">
         <label>hairColor </label>
         <input type="text" name="hairColor"  onChange={handlemodel} required value={model.hairColor} />
       </div>
       <div className="input-container">
         <label>eyeColor </label>
         <input type="text" name="eyeColor"  onChange={handlemodel} required value={model.eyeColor} />
       </div>
       <div className="input-container">
         <label>comments </label>
         <input type="text" name="comments"  onChange={handlemodel} required value={model.comments} />
       </div>
       <div className="input-container">
         <label>password </label>
         <input type="password" name="password"  onChange={handlemodel} required value={model.password} />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>

     </form>

     </div>
  )
}
