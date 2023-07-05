import React from 'react'
import { useLocation } from 'react-router-dom'
function UniversiteDetail(props){
    const location=useLocation();
    const detailuniversite=location.state
    console.log(detailuniversite)
  return (
    <div>
        <img src={detailuniversite.image} className="img-fluid" alt="..."></img>
        <ul className="list-group list-group-horizontal">
  <li className="list-group-item">Université</li>
  <li className="list-group-item">{detailuniversite.Université}</li>
</ul>
<ul className="list-group list-group-horizontal-sm">
  <li className="list-group-item">Region</li>
  <li className="list-group-item">{detailuniversite.Region}</li>
</ul>
<ul className="list-group list-group-horizontal-md">
  <li className="list-group-item">Site web</li>
  <li className="list-group-item">{detailuniversite.Site_web}</li>
</ul>
    </div>
  )
}

export default UniversiteDetail