import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })
    console.log(credentials)

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post("/auth/login", credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // redirect to the apps main page?
        props.history.push("/users");
      })
      .catch(err => console.log(err));
  };

    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;