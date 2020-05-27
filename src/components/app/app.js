import React from 'react';
import "@firebase/database";
import './app.css';

import MainPage from '../page/main-page'
import PageTest from '../page/page-test'
// import Header from "../header"
import StudiaPage from '../page/studia-page'
import ContactUs from '../page/contact-us'
import Main from '../admin/pages/main'


import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //{IndexRoute}

const styles = {
  fontFamily: "sans-serif"
};

export default class App extends React.Component {
  

  render() {
    return (
    <div style={styles}>
      <Router>
        {/* <div>
          <Header/>
        </div> */}
         <Switch>
            <Route  exact path="/" component={MainPage} />
            <Route path="/about" component={StudiaPage} />     {/*PageTest*/}
            <Route path="/figters" component={MainPage} /> {/*PageListHit*/}
            <Route path="/contact_us" component = {ContactUs} />
            <Route path="/admin" component = {Main} />
         </Switch>
      </Router>        
     </div>
    );
  }
  }

  