import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faCircleUser,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbare(){
  return (
    <div className="navbarcomponent">
    <div className="nav-icone">
        <h3>TaySsir</h3> <img className="TaySsir-icone" src="42c33938a8a54f6092929e6deb606b18.png" alt=""/>
    </div>
    <div className="navlist">
        <ul>
           <Link style={{ textDecoration: 'none', color: 'black'}} to={'/'}> <li>Home <FontAwesomeIcon   icon={faHouse}/></li></Link>
            <li>e-Services <FontAwesomeIcon   icon={faCaretDown}/></li>
            <li>Take a Tour <FontAwesomeIcon   icon={faCaretDown}/></li>
            <li>Track Application <FontAwesomeIcon   icon={faCaretDown}/></li>
            <Link style={{ textDecoration: 'none', color: 'black'}} to={'/Contact'}><li >Contact Us <FontAwesomeIcon   icon={faCaretDown}/></li></Link>
        </ul>
    </div>
    <div>
    <button type="button" className="btn btn-success">Connexion </button>
    <button type="button" className="btn btn-danger">Sign Up<FontAwesomeIcon  icon={faCircleUser}/></button>
    
    </div>
</div>
  );
}

export default Navbare;