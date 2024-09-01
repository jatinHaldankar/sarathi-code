import React from 'react';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';


const addToWatchList = async (name) => {

  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: localStorage.getItem("userEmail"),
      name: name,
    })
  }
  const response = await fetch("https://sarathi-359y.onrender.com/addToWatchList", options);
  let result = await response.json();

  alert(result.message);
}

export default function CardComponent(props) {
  return (
    <div className="col">
      <div className="card card_shadow h-100 position-relative rounded-4 overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 gradient-overlay"></div>

        {
          props.img  &&  <VisibilityIcon className="position-absolute top-0 end-0 m-2 visibility-icon" onClick={() => addToWatchList(props.name)} />
        }

        {props.img && (
          <div className="img-container">
            <img src={props.img} className="card-img-top" alt="...." />
          </div>
        )}

        <div className="card-body p-4">
          <Link
            className={`fs-5 text-decoration-none ${props.img ? "link" : ""}`}
            to={props.link}
            target="_blank"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600" }}
          >
            {props.name}
          </Link>
          <p className="card-text pCardText" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {props.description}
          </p>
          {props.age && (
            <>
              <p className="card-text pCardText">
                <b>Age:</b> {props.age}
              </p>
              <p className="card-text pCardText">
                <b>Beneficiary:</b> {props.beneficiary}
              </p>
            </>
          )}
          {
            ! props.img &&  <VisibilityIcon className="position-absolute top-0 end-0 m-2 visibility-icon" onClick={() => addToWatchList(props.name)} />
          }
        </div>
      </div>
    </div>
  );
}
