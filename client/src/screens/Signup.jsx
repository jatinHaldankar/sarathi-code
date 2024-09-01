import React, { useState } from 'react';
import Header from '../components/Header';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    location: "",
    email: "",
    password: ""
  });

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: details.name,
        location: details.location,
        email: details.email,
        password: details.password
      })
    }

    const response = await fetch("https://sarathi-359y.onrender.com/signupData", options);
    const json = await response.json();

    if (json.success) {
      navigate("/login");
    }
    else {
      alert("enter valid credentials");
    }
  }
  return <div>
    <Header />
    <div className='container transferCard ' style={{height:"65vh"}}>

      <div className='container'>

        <h5 className='card-title text-success headingUser'>Sign Up and Discover Limitless Possibilities!</h5>


        <form onSubmit={handleSubmit}>
          <div className="mb-3 w-60">
            <label htmlFor="name" className="form-label">name</label>
            <input type="text" className="form-control" name="name" value={details.name} onChange={changeDetails} required={true} />
          </div>

          <div className="mb-3 w-60">
            <label htmlFor="address" className="form-label">location</label>
            <input type="text" className="form-control" name="location" value={details.location} onChange={changeDetails} required={true} />
          </div>

          <div className="mb-3 w-60 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name="email" value={details.email} aria-describedby="emailHelp" onChange={changeDetails} required={true} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 w-60">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={details.password} onChange={changeDetails} required={true} />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
        </form>
      </div>

      <img src="images/signup.jpg" alt="this is an img" style={{ width: "50%" }} />

    </div>
  </div>
}

export default Signup;
