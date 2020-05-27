import React, { Component } from 'react';
import './studia-page.css';

// import {
//   FirebaseDatabaseProvider,
//   FirebaseDatabaseNode,
//   FirebaseDatabaseMutation
//        } from "@react-firebase/database";
import Header from '../../header';
import Footer from '../../template/footer';

export default class StudiaPage extends Component {

  state = {
    pushedKey: '',
    path: "HS1/"
  };

  render(){
    let styleImage={
      display : "block",
      maxWidth: "100%",
      height: "100%",
      background: "url('"+require('../../../photo-main/main1.jpg') + "') no-repeat center center",
      backgroundSize: "50% cover"
    }
    console.log(styleImage);
    return(
      <div className="row">
        <div className="col">
          <Header/>
        </div><div className="w-100"></div> 
        <div className="col" style={{height: "173px"}}>
           <img src={require('../../../photo-main/body4.jfif')} 
           alt='' className="eghtproc" 
           style={{ width:"100%",
                    height:"100%"
                    }}/>
        </div><div className="w-100"></div>      
        <div className="col">
          <Footer/>
        </div>
      </div>
    );
  }

}


