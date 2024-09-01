import React from 'react';
import Header from '../components/Header';
import Service from '../components/Service';

const Home = () => {
  return <div className="mb-4">
    <Header />
    <div id="carouselExampleFade" className="carousel slide carousel-fade carouselImg" data-bs-ride="carousel">

      <div className="carousel-inner curve1  " id='carousel'>
        <div className="carousel-item active" >
          <img src="images/slider1.jpg" className="d-block w-100  " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/slider2.jpg" className="d-block w-100 " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/slider3.jpg" className="d-block w-100 " alt="..." />
        </div>
        <div className="carousel-item">
          <img src="images/slider4.jpg" className="d-block w-100 " alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    <div className="container">
      <h1 className="cardHeader">About Us</h1>

      <div className="card-body card card_shadow  ">
        <p className="card-text pCardText">Welcome to Sarathi, your comprehensive guide to understanding and accessing government schemes and NGOs in India. We are committed to empowering individuals and communities by providing easy access to information on a wide range of government programs, financial assistance schemes, and social welfare initiatives. Our platform also connects you with NGOs dedicated to making a positive impact in various sectors, including education, healthcare, women’s empowerment, environmental conservation, and more.</p>
      </div>
    </div>

    <div className="container my-3 services">
      <h1 className="cardHeader">Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        <Service
          img="images/service1.jpg"
          title="Government Schemes"
          content="We provide detailed descriptions of various government schemes, including eligibility criteria, benefits, and application processes, helping you navigate the often complex bureaucratic procedures with ease."
        />
        <Service
          img="images/service2.jpg"
          title="NGO Directory"
          content="Our platform features a curated list of NGOs working across different sectors. We provide insights into their missions, the areas they serve, and how you can get involved or seek their support."
        />
        <Service
          img="images/service3.jpg"
          title="Dedicated Support"
          content="Our team is here to help you every step of the way, whether you need guidance on applying for a scheme, understanding eligibility, or finding the right NGO to support your cause."
        />

      </div>
    </div>

    <div className="container">
      <h1 className="cardHeader">Our Vision</h1>

      <div className="card-body card card_shadow  ">
        <p className="card-text pCardText">We envision a society where every citizen is aware of the resources available to them and can easily access the support they need. By facilitating connections between people and the programs designed to help them, we hope to contribute to the social and economic development of our nation.

          Thank you for visiting Sarathi. We are here to help you discover the opportunities that can make a difference in your life. Together, we can build a more informed, empowered, and connected community.
        </p>
      </div>
    </div>
  </div>
}

export default Home;