import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from "../miscellaneous/Form";
import {useNavigate} from "react-router-dom"
import { useAuth } from "../hooks/Auth";
const Registration = () => {
  const [user, setUser]= useState({
    username:"",
    confirmPassword:"",
    email:"",
    phone:"",
    password:"",
    image:"",

})
//destructuring of storeTokeninLs from useAuth
const {storeTokeninLs}= useAuth()
const navigate= useNavigate()
const handleChange=(e)=>{
    console.log(e)
    let name= e.target.name
    let value=e.target.value
    setUser({
        ...user,
        [name]:value
    })

}
const handlesubmit= async(e)=>{
e.preventDefault();
console.log(user)
try {
  const response = await fetch(`http://localhost:5000/api/auth/register`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(user)
  }
 
  )
  if (response.ok) {
    setUser({ username: "", email: "", phone: "", password: "" , confirmPassword:"",image:""});
    navigate("/login");
    const res_data = await response.json();
    // localStorage.setItem("token", res_data);
  
    storeTokeninLs(res_data.token)
    console.log(`the data from server is ${res_data}`);
  }
  

  console.log(response)
} catch (error) {
  console.log(error.message)
}

}
//image part

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
          <div className="container">
  <div className="row">
    {/* Column 1: Image */}
    <div className="col-md-6 registration-image mt-5">
      <img
        src="img.jpg"
        alt="General photo"
        width="300"
        height="300"
      />
    </div>

    {/* Column 2: Registration Form */}
    {/* < Form /> */}
    <div className="col-md-6 registration-form mt-5">
      <h1 className="main-heading text-center">Registration Form</h1>
      <div className="form-section ">
      <form onSubmit={handlesubmit}className="  registration-form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter Your User Name"
          id="username"
          required
          autoComplete="off"
          className="form-control"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          id="email"
          required
          autoComplete="off"
          className="form-control"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          id="phone"
          required
          autoComplete="off"
          className="form-control"
          value={user.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          id="password"
          required
          autoComplete="off"
          className="form-control"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Password</label>
        <input
          type="confirmPassword"
          name="confirmPassword"
          placeholder="Enter Your Password"
          id="confirmPassword"
          required
          autoComplete="off"
          className="form-control"
          value={user.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mt-3 mb-3 mx-auto">
        <label htmlFor="imageUpload">Upload Image:</label>
        <br />
        <input
          type="file"
          className="form-control-file"
          id="imageUpload"
          accept="image/*"
          name="image"
          value={user.image}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-outline-primary mx-auto mt-3" >Submit</button>
      </div>
    </form>
   </div>
    </div>

  
  </div>
</div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
