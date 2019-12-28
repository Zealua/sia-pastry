import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarColor03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link to="/" class="nav-link">ГОЛОВНА<span class="sr-only">(current)</span></Link>
          </li><li class="nav-item active">
            <Link to="/fights/" class="nav-link">СТУДІЯ<span class="sr-only">(current)</span></Link>
          </li><li class="nav-item active">
          <Link to="/figters/" class="nav-link">СМАКИ<span class="sr-only">(current)</span></Link>
        </li><li class="nav-item active">
          <Link to="/contact_us" class="nav-link">КОНТАКТИ<span class="sr-only">(current)</span></Link>
        </li>  {/* <li>
          <Link to="/secret">Secret</Link>
       </li>*/}
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
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
