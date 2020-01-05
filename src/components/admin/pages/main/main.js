import React, { Component } from 'react';

import './main.css';

import * as firebase from "firebase/app";
import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode
  // ,FirebaseDatabaseMutation
       } from "@react-firebase/database";
import { config } from "../../../../config";
import Login from '../login';



export default class Main extends Component {

  state = {
    onLoggin : false, 
    email    : "",
    pass     : "",
    security : {}
  };

setSecur=(data)=>{
  this.setState({security:data});
}

setPass=(event)=>{
  const passValue= event.target.value;
  this.setState({pass: passValue});
}

setEmail=(event)=>{
  const emailValue=event.target.value;
  this.setState({email: emailValue});
}

getCookie(name) {
  // let matches = document.cookie.match(new RegExp(
  //   "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  // ));
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[]\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  if(matches){
    return matches[1]==="true"; //matches ? decodeURIComponent(matches[1]) : undefined;
  } else{
    return false;
  }
}

checkUser=() => {
  if((this.state.email === this.state.security.email && this.state.pass === this.state.security.pass) || this.getCookie("Login")){
    this.setState({onLoggin:true});
    document.cookie = "Login=true";
  } else {
    alert("We don't know you !!!")
  }
}

render() {
  const path = "/admin/Security";//this.props.path;
  const login = this.getCookie("Login");
  if(!this.state.onLogginlo && !login){
    return (
      <div>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <FirebaseDatabaseNode path={path} >
            {d => {
              const object = d.value;
              if (object !== null) {
                this.setSecur(object);
              }
              return (
                <div className="container container-table mildle-all">
                <div className="row vertical-center-row">
                  <div className="login-form">
                    <form>
                      <div className="form-group  input-group input-group-lg"> 
                        <span className="input-group-addon"><span className="glyphicon glyphicon-user"></span></span>
                        <input type = "email"  className="form-control" placeholder="Enter email" onChange ={this.setEmail} />
                      </div>
                      <div className="form-group  input-group input-group-lg">
                        <input type="password" className="form-control" placeholder="Password"  onChange ={this.setPass}/>
                      </div>  
                      <div className="form-group  input-group input-group-lg"> 
                        <button className="form-group full" onClick= {this.checkUser} > Loggin </button><br/>
                      </div>
                    </form>
                  </div>
                </div></div>
              );
            }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
      </div>
    );} else {
      return(
        <div>
           <FirebaseDatabaseProvider firebase={firebase} {...config}>
            <Login/>
          </FirebaseDatabaseProvider>
        </div>
      )
    }
  }
}
