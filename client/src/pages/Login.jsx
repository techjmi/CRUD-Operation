
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/Auth";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokeninLs } = useAuth();

  const handlesubmit = async (e) => {
    e.preventDefault();

    console.log(login);

    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokeninLs(res_data.token);
        setLogin({
          email: "",
          password: "",
        });
        toast("Login Successful");
        navigate("/service");
      } else {
        toast("Login Failed. Please Enter Valid Details");
      }

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
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
              <div className="col-md-6 registration-form mt-5">
                <h1 className="main-heading text-center">
                  Login Form
                </h1>
                <div className="form-section ">
                  <form
                    onSubmit={handlesubmit}
                    className="  registration-form"
                  >
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter Your User Email"
                        id="email"
                        required
                        autoComplete="off"
                        className="form-control"
                        value={login.email}
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
                        value={login.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-outline-primary mx-auto mt-3"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
