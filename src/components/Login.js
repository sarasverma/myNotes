import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHis6ory } from "react-router-dom"; has been updated in react router 5

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:5000/api/auth/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.hasOwnProperty("authtoken")) {
      // save auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      //   history.push("/");
    } else {
      alert(json.error);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelp"
          minLength={5}
          required
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          minLength={5}
          required
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Login;
