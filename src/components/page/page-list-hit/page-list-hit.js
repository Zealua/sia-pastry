import React, { Component } from 'react';
//import {FirebaseDatabaseMutation}
//                         from "@react-firebase/database";
import './page-list-hit.css';

import { config } from "../../../config";
import * as firebase from "firebase/app";

import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation
       } from "@react-firebase/database";
import Header from '../../header';

export default class PageListHit extends Component {
  render(){
    return(
      <div className='d-flex '>
        <Header/>
      <ul className='list-group  list-group-horizontal '>
        <li className="list-group-item"><LogList/></li>
        {/*<li className="list-group-item"><LogList/></li>*/}
      </ul>
      </div>

    );
  }
}

class LogList extends Component {

  state = {
    path: "HS1/"
  };

  selection = (select) => {
    var x = document.getElementById("path").value;
    console.log( x );
    this.setState({path:x}) 
  }

  render(){
    return(
    <div>
      <Header/>  
      <div className="send-data">
        <select id="path" onChange={this.selection}>
          <option value="HS1/">First Fighters </option>
          <option value="HS2/">Second Fighters </option>
          <option value="HS3/">Third Fighters </option>
        </select>
        <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode path={this.state.path} >
            {d => {
              console.log(d);
              const object = d.value;
              let hitData = [];
              if (object !== null) {
                for (let key in object) {
                  if (key === "hits") {
                   for (let keyH in object.hits) {
                      hitData.push(object.hits[keyH]);
                    }
                  }
                } 
              }
         let List;
         let counter=0;
         if(hitData.length>1){
            List = () => hitData.map((item)=>{
                const {part,power, long, incr , time}=item;
                counter++;
                return (<li  className="list-group-item log">
                          <p>{counter} . Part {part}, Power {power}, Long {long}, Span {incr}, Time {time} </p><br/>
                      </li>);
            })
         } else {    
            List =()=>(
               <li  className="list-group-item log">
                 <p>Part Fallse </p><br/>
               </li>)
          }

        return (
           <div className='d-flex '> 
             <ul className='list-group  list-group-vertical logs'>
               <List/>
              </ul>
           </div>
         );
       }}
     </FirebaseDatabaseNode>
   </FirebaseDatabaseProvider>
  </div>
  </div>
 );
  }

  
}
