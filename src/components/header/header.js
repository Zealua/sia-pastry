import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
    {/*  <h3>
        <Link to="/">
          StarDB
        </Link>
    </h3>*/}  
     <img className="logo" src={require('../../imgonline-com-ua-Transparent-backgr-0uRgiIibCsvz.png')} alt='d2'/>
      <ul className="d-flex">
        <li>
          <Link to="/fights/">TESTS</Link>
        </li><li>
          <Link to="/figters/">LOGS</Link>
        </li><li>
          <Link to="/technology/">TECHNOLOGY</Link>
        </li><li>
          <Link to="/contacts">CONTACT US</Link>
        </li>  {/* <li>
          <Link to="/secret">Secret</Link>
       </li>*/}
      </ul>

      <button
          onClick={onServiceChange}
          className="btn btn-primary btn-sm">
        + CREATE FITE
      </button>
    </div>
  );
};

export default Header;
