import React, { useState, useEffect } from 'react';
import Header from '../components/Header';


const WatchList = () => {
    const [watchlist, setWatchList] = useState([]);

    const load = async () => {
        const options1 = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem("userEmail")
            })
        }
        let response = await fetch("https://sarathi-359y.onrender.com/watchlistData", options1);
        let listsArray = await response.json();
        setWatchList(listsArray);
    }

    useEffect(() => {
        load();
    }, []);


    return <>
        <Header />

        <div className='container d-flex m-4 ' style={{height:"65vh"}}>
        <div className='container'>

            <h5 className='card-title text-success headingUser mb-4'>Your WatchList</h5>
            {watchlist.length === 0 ? (
                <p>Your watchlist is empty.</p>
            ) : (
                <div className="row">
                    {watchlist.map((items, index) => (
                        <h5>{items}</h5>
                    ))}
                </div>
            )}
        </div>
        <img src="images/watchlist.png" alt="this is an img" style={{ width: "50%" }} />
        </div>
    </>
}

export default WatchList;