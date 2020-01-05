import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarColor03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">ГОЛОВНА<span className="sr-only">(current)</span></Link>
          </li><li className="nav-item">
            <Link to="/fights/" className="nav-link">СТУДІЯ<span className="sr-only">(current)</span></Link>
          </li><li className="nav-item">
          <Link to="/figters/" className="nav-link">СМАКИ<span className="sr-only">(current)</span></Link>
        </li><li className="nav-item">
          <Link to="/contact_us" className="nav-link">КОНТАКТИ<span className="sr-only">(current)</span></Link>
        </li>  {/* <li>
          <Link to="/secret">Secret</Link>
       </li>*/}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        {/* <button
            onClick={onServiceChange}
            className="btn btn-primary btn-sm">
          + CREATE FITE
        </button> */}
      </div>
    </nav>
    <div>
      <img src={require('../../sia-main-logo.jpeg')} alt='' className="logo"/>
    </div>
    </div>
  );
};

export default Header;
