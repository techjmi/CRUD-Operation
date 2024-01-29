
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/home.css";
import Registration from "./Registration";
import { Form } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { toast } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { user } = useAuth();

  useEffect(() => {
    const updateContact = () => {
      if (user) {
        setContact({
          name: user.username,
          email: user.email,
          message: "",
        });
      }
    };
  
    updateContact();
  }, [user]);
  

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/auth/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact({
          message: "", //if okk then empty the field
        });

        const res_data = await response.json();
        console.log(`the message from server is ${res_data}`);
        toast.success("Message Sent Successfully");
      } else {
        toast.error("Something went wrong while sending the message. Please try again!");
      }

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className=" container-fluid home">
        <div className="col-md-10 mx-auto">
          <h1 className="text-center mb-3">Contact Us</h1>
          <div className="row custom-row">
            <div className="left-part col-md-5">
              <img src="contact.jpg" alt="..." width="400" height="300" />
              <div className="text mt-2">
                {/* <h3>Welcome To World Best IT Placement Resource</h3> */}
              </div>
            </div>
            <div className="left-part col-md-5">
              <div className="registration-home">
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
                      value={contact.name}
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
                      value={contact.email}
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
                      value={contact.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handlesubmit}
                      type="submit"
                      className="btn btn-outline-primary mx-auto mt-3"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map mt-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.717584929735!2d78.33788027262543!3d17.48531692187823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb923f2a7e35a1%3A0x80f97e6e81318829!2sHafeezpet%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702555647718!5m2!1sen!2sin"
          width="100%"
          height="450"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
