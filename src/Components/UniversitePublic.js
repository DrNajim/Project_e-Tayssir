import React from 'react'
import { Link } from 'react-router-dom'

function UniversitePublic(props){
  return (
    <div className='search-videoflag'>
<div className="card" style={{width:"50rem"}}>
  <img src={props.image} className="card-img-top" alt="Universite"/>
  <div className="card-body">
    <Link to={"/UniversiteDetail"} state={props}>
    <p className="card-text">{props.Université}</p></Link>
    <p className="card-text">{props.Region}</p>
  </div>
</div>
    </div>
  )
}

export default UniversitePublic