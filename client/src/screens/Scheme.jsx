import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header  from '../components/Header';

const Scheme = () => {

  const [data, setData] = useState([]);

  const load = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    }

    let response = await fetch("https://sarathi-359y.onrender.com/schemeData",options);
    let UserArray = await response.json();
    setData(UserArray);
  }

  useEffect(() => {
    load();
  }, [])

  return <div>
  <Header />

    <div className='container my-3' >
      <div className="row row-cols-1 row-cols-md-4 g-3 ">
        {
          data.map((d, index) => {
            return <Card
              key={index}
              id={index}
              name={d.name}
              beneficiary={d.beneficiary}
              age={d.age}
              description={d.description}
              link={d.link}
            />
          })
        }
      </div>
    </div>
  </div>
}

export default Scheme;