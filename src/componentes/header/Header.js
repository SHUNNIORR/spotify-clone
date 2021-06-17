import React,{Fragment, useState} from 'react'
import { NavLink } from "react-router-dom";
import './Header.css';
import { cerrarSesion } from '../spotify';
const Header = ( props ) => {
    
    const [click, setClick] = useState(false);
    //estado que me dice cuando ha sido clickeado un link del navbar
    const handleClick = () => setClick(!click);
    return (
        <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className="nav-userInfo">
                <a className="nav-userInfo">
                    <img src={props.img} className="header-img"></img>
                    <h1 className="header-name">{props.name} </h1>
                </a>
                
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/favos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Favoritos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                    exact
                    to="/logout"
                    activeClassName="active"
                    className="nav-links"
                    onClick={cerrarSesion}
                  >
                    Cerrar sesión
              </NavLink>
                
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Header
