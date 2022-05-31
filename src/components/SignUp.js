import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.cpassword === credentials.password) {
      const url = `http://localhost:5000/api/auth/create_user`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      // console.log(json);

      if (json.hasOwnProperty("authtoken")) {
        // save auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
      } else {
        alert(json.error);
      }
    } else {
      alert("Password and confirm password doesn't match !");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          minLength="5"
          required
          value={credentials.name}
          onChange={onChange}
        />
      </div>
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
          minLength="5"
          required
          value={credentials.email}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          minLength="5"
          required
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="cpassword"
          id="cpassword"
          minLength="5"
          required
          value={credentials.cpassword}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignUp;
