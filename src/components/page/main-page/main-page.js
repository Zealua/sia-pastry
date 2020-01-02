import React, { Component } from 'react';
import './main-page.css';

import * as firebase from "firebase/app";

import { config } from "../../../config";

import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation
       } from "@react-firebase/database";
import Header from '../../header';


export default class MainPage extends Component {

  state = {
    pushedKey: '',
    path: "HS1/"
  };


  render(){
  

    return(
      <div>
        <Header/>
      </div>
    );
  }

}


