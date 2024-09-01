import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    }

    return <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand fs-1" to="/" >
                Sarathi</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">

                        <Link className="nav-link active fs-5" aria-current="page" to="/scheme">Scheme</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/ngo">NGO</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link active fs-5" aria-current="page" to="/contact">Contact</Link>
                    </li>
                </ul>

                {
                    localStorage.getItem("authToken")
                        ?
                        <div className='d-flex'>
                            <Link className="btn bg-white text-success mx-1 fs-5" to="/watchlist">WatchList</Link>
                            <button onClick={handleLogout} className="btn bg-white text-danger fs-5" >Logout</button>
                        </div>
                        :
                        <div className='d-flex'>
                            <Link className="btn bg-white text-success mx-1 fs-5 " to="/login">Login </Link>
                            <Link className="btn bg-white text-success mx-1 fs-5 " to="/signup">Signup</Link>
                        </div>
                }
            </div>
        </div>
    </nav>

}

export default Header;