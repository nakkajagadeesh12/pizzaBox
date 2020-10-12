import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("e", e);
    if (password !== password2) {
      console.log("password not match");
    } else {
      const data = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = JSON.stringify(data);
        const res = await axios.post("/api/users", body, config);
        console.log("submitted successfully", res);
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <p>
  <i className="fa fa-user" aria-hidden="true"></i>{" "}Create Account
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => changeValue(e)}
            required
          />
          {name}
        </div>
        <br /><br />
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(e) => changeValue(e)}
            value={email}
          />
          {email}
        </div>
        <br /><br />
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => changeValue(e)}
            value={password}
          />
          {password}
        </div>
        <br /><br />
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            onChange={(e) => changeValue(e)}
            value={password2}
          />
          {password2}
        </div>
        <br /><br />
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Register;
