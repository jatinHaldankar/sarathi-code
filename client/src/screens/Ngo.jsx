import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Header  from '../components/Header';

const Ngo = () => {

  const [data, setData] = useState([]);

  const load = async () => {

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      }
    }

    let response = await fetch("https://sarathi-359y.onrender.com/ngoData",options);
    let UserArray = await response.json();
    setData(UserArray);
  }

  useEffect(() => {
    load();
  }, [])

  return <div>
  <Header />

    <div className='container my-3' >
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {
          data.map((d, index) => {
            return <Card
              key={index}
              id={index}
              name={d.name}
              description={d.description}
              link={d.website}
              img={d.img}
            />
          })
        }
      </div>
    </div>
  </div>
}

export default Ngo;