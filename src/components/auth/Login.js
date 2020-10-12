import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./login.css";

function Login(props) {
  console.log("prps",props);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("e", e);

    // const data = {
    //   email,
    //   password,
    // };
    // try {
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    //   const body = JSON.stringify(data);
    //   const res = await axios.post("/api/users", body, config);
    //   console.log("submitted successfully", res);
    // } catch (err) {
    //   console.log("err", err);
    // }
  };

  const pinButton = () => {
    console.log("gtrdf");
    window.params = { name: "jaggu" };
    let win = window.open(
      "http://localhost:3000/login",
      "_blank",
      "width=700, height=600"
    );
    win.params={name: "jagguuuuuuu"};
  };

  useEffect(() => {
     console.log("wind", window);
    // else console.log("els");
  });

  return (
    <div className="container">
      <button onClick={() => pinButton()}>Pin</button>
      <h1>LogIn</h1>
      <p>
        <i className="fa fa-user" aria-hidden="true"></i> Sign Into your Account
      </p>
      {console.log("fom", formData)}
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={(e) => changeValue(e)}
            value={email}
          />
        </div>
        <br />
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => changeValue(e)}
            value={password}
          />
        </div>
        <br />
        <br />
        <input type="submit" value="Login" className="btn btn-primary" />
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;
