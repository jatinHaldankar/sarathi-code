import React, { useState } from 'react';
import Header  from '../components/Header';

const Contact = () => {

  const [contacts, setContacts] = useState({
    "name": "",
    "email": "",
    "problem": ""
  })

  const changeContacts = (event) => {
    const { value, name } = event.target;
    setContacts((prevValue) => {
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
        name: contacts.name,
        email: contacts.email,
        problem: contacts.problem
      })
    }

    const response = await fetch("https://sarathi-359y.onrender.com/contactData", options);
    const json = await response.json();

    alert(json.message);

  }

  return <div>
   <Header />
    <div className="carousel slide" data-bs-ride="false">
      <div className="carousel-inner  curve">
        <div className="carousel-item active con1 contact">
          <img src="images\contact_cover.jpg " className="d-block w-100 im"  style={{ filter: "brightness(35%)" }} alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5 className="help">We’re Here to Help.</h5>
            <p className="para"> We always want to hear from you! Let us know how we can best help you and we'll do our very best.</p>

          </div>
        </div>

      </div>
    </div>



    <section className='contactBody'>
      <br />
      <br />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">


            <h2 className="fw-bold">
              Let us hear from you directly!
            </h2>


            <p className="fs-lg text-muted mb-7 mb-md-9">
              We always want to hear from you! Let us know how we can best help you and we'll do our very
              best.
            </p>

          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-10">


            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">


                    <label className="form-label" >
                      Full name
                    </label>


                    <input className="form-control" name="name" value={contacts.name} onChange={changeContacts} type="text" placeholder="Full name" />

                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="form-group mb-5">


                    <label className="form-label">
                      Email
                    </label>


                    <input className="form-control" name="email" value={contacts.email} onChange={changeContacts} type="email" placeholder="hello@domain.com" />

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="form-group mb-7 mb-md-9">


                    <label className="form-label">
                      What can we help you with?
                    </label>


                    <textarea className="form-control" name="problem" rows="5"
                      placeholder="Tell us what we can help you with!" value={contacts.problem} onChange={changeContacts}></textarea>

                  </div>
                </div>
              </div>

              <br />
              <div className="row justify-content-center">
                <div className="col-auto">


                  <button type="submit" className="btn btn-primary">
                    Send message
                  </button>

                </div>
              </div>

              <br />
            </form>

          </div>
        </div>
      </div>
    </section>
  </div>
}

export default Contact;