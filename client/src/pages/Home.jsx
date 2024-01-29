import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
import Registration from "./Registration";
import { Form, useAsyncValue } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

const Home = () => {
  const {user} = useAuth()
  const [User, setUser]= useState({
    name:"",
    email:"",
    message:"",
 
})
const [userData, setUserData] = useState(true);
if(user &&userData){
  setUser({
    
    name: user.username,
    email: user.email,
    message: "",
  })
  setUserData(false)
}
const handleChange=(e)=>{
    console.log(e)
    let name= e.target.name
    let value=e.target.value
    setUser({
        ...User,
        [name]:value
    })

}
// const handlesubmit=(e)=>{
// e.preventDefault();
// console.log(User)
// }  
  return (
    <>
      <div className=" container-fluid home">
     <div className="col-md-10 mx-auto">
      <div className="row custom-row">
        <div className="left-part col-md-5">
        <img src="homeimg.jpg" alt="..." width="400" height="300" />
              <div className="text mt-2">
                {/* <h3>Welcome To World Best IT Placement Resource</h3> */}
              </div>
        </div>
        <div className="left-part col-md-5">
        <div className="registration-home">
                {/* <Form/> */}
            
                  {/* <h2 className="text-center">Get Call Back from Us</h2> */}
                 
                  <form className="  message-form no-gutters">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="name"
          name="name"
          placeholder="Write Your Name"
          id="name"
          required
          autoComplete="off"
          className="form-control"
          value={User.name}
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
          value={User.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
  <label htmlFor="message">Message</label>
  <textarea
    name="message"
    placeholder="Write Your Message Here"
    id="message"
    required
    autoComplete="off"
    className="form-control"
    value={User.message}
    onChange={handleChange}
  />
</div>

      <div className="text-center">
        <button type="submit" className="btn btn-outline-primary mx-auto mt-3">Submit</button>
      </div>
    </form>
                 
              
              </div>
</div>
      </div>
     </div>
      </div>
      <div className="container-fluid">
        <h1 className="text-center mt-3">What You Can Get Here</h1>
<div className="para">
  <p> Explore a comprehensive collection of PDFs tailored for MERN (MongoDB, Express.js, React, Node.js) development enthusiasts. You can access and download all PDF resources related to MERN development right here. Enhance your skills, stay updated, and excel in the world of MERN programming. Happy learning! </p>
</div>
      </div>
      <div className="resource-pdf">
        <div className="HTML">
<p>HTML</p>
        </div>
        <div className="HTML">
        <p>HTML</p>
          </div>
          <div className="HTML">
          <p>HTML</p>
          </div>
          <div className="HTML">
          <p>HTML</p>
          </div>
          <div className="HTML">
          <p>HTML</p>
          </div>
          <div className="HTML">
          <p>HTML</p>
          </div>
       
      </div>
    </>
  );
};

export default Home;
