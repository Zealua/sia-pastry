import React, { Component } from 'react';
import './main-page.css';

// import {
//   FirebaseDatabaseProvider,
//   FirebaseDatabaseNode,
//   FirebaseDatabaseMutation
//        } from "@react-firebase/database";
import Header from '../../header';
import Footer from '../../template/footer';
import PhotoSlider from '../../template/photo-slider';


export default class MainPage extends Component {

  state = {
    pushedKey: '',
    path: "HS1/"
  };


  render(){
  

    return(
      <div className="row">
        <div className="col">
          <Header/>
        </div><div className="w-100"></div>       
        <div className="col">
          <PhotoSlider amount="9" />
        </div><div className="w-100"></div>
        <div className="col">
          <Footer/>
        </div>
      </div>
    );
  }

}


