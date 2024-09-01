import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const changeDetails = (event) => {

    const { value, name } = event.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password
      })
    }

    const response = await fetch("https://sarathi-359y.onrender.com/loginData", options);
    const json = await response.json();

    if (json.success) {
      localStorage.setItem("userEmail", details.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }
    
    else {
      alert("Invalid credentials");
    }
  }
  return (
    <div>
      <Header />
      <div className='container  transferCard ' style={{height:"65vh"}}>
        <div className='container'>
          <h5 className='card-title headingUser text-success'>Unlock the Portal to Awesomeness: Login Now!</h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-60">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" value={details.email} aria-describedby="emailHelp" required={true} onChange={changeDetails} />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 w-60">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={details.password} onChange={changeDetails} required={true} />
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/signup" className="m-3 mx-1 btn btn-danger">I'm a New User</Link>
          </form>
        </div>

        <img src="images/login.jpg" alt="this is an img" style={{ width: "50%" }} />
      </div>

    </div>
  )
}

export default Login;