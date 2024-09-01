import React from 'react'

const Service=(props)=> {
  return <div className="col">
  <div className="card card_shadow h-100">
    <img src={props.img} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text pCardText">{props.content}</p>
    </div>
  </div>
</div>
}

export default Service;