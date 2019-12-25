import React from 'react';
import "@firebase/database";
import './app.css';

import PageTest from '../page/page-test'
import Header from "../header"
import PageListHit from '../page/page-list-hit'

import {BrowserRouter as Router, Switch, Route, IndexRoute} from 'react-router-dom';

const styles = {
  fontFamily: "sans-serif"
};

export default class App extends React.Component {
  

  render() {
    return (
    <div style={styles}>
      <Router>
         <div className="grey">
            <Header/>
         </div>
         <Switch>
            <Route path="/fights" component={PageTest} />
            <Route path="/figters" component={PageListHit} />
         </Switch>
      </Router>        
     </div>
    );
  }
  }

  