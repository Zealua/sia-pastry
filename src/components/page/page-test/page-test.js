import React, { Component } from 'react';
import './page-test.css';

import * as firebase from "firebase/app";

import SetSensetive from "../../setSensetive"
import ProgerssBars from "../../progerss-bar"
import PropertyList from "../../property-list"
import ShowHit from "../../show-hit"

import { config } from "../../../config";

import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation
       } from "@react-firebase/database";
import Header from '../../header';
import Footer from '../../template/footer';


export default class PageTest extends Component {

  state = {
    pushedKey: '',
    path: "HS1/"
  };
  
hitProper = {
    part:  0,
    power: 0,
    long:  0,
    span:  0,
    time: 0,
    counter: 0,
    ip: ""
  };

selection = (select) => {
    var x = document.getElementById("path").value;
    console.log( x );
    this.setState({path:x}) 
}

destructuringJson (string){
    this.hitProper.part=string.part;
    this.hitProper.long=string.long;
    this.hitProper.power=string.power;
    this.hitProper.span=string.incr;
    this.hitProper.time=string.time;
  }

  render(){

    return(
      <div>
        <Header/>
         <div id="section1">
        <label for="path">SELECT FIGHTER</label>
        <select id="path" onChange={this.selection}>
            <option value="HS1/">First Fighters </option>
            <option value="HS2/">Second Fighters </option>
            <option value="HS3/">Third Fighters </option>
        </select>
    </div>
      <div className="send-data">
           <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <FirebaseDatabaseNode path={this.state.path} >
          {d => {
            const object = d.value;
            let hitData = [];
            if (object !== null) {
              for (let key in object) {
                if (key === "hits") {
                  for (let keyH in object.hits) {
                    hitData.push(object.hits[keyH]);
                  }
                }
                if(key==="IP"){
                  this.hitProper.ip=object[key];
                  console.log(this.hitProper.ip);
                }
              }
              this.destructuringJson(hitData[hitData.length - 1]);
            }

            return (
            <div>
              <div className='d-flex '> 
                <ul className='list-group  list-group-horizontal '>
                  <li className="list-group-item li-css">
                     <React.Fragment>
                       <h1>HIT PARAMS</h1> 
                       <PropertyList property={this.hitProper} /><br/><br/><br/>
                       <SetSensetive path={`${this.state.path}param`} btnText="set sensitivity" />
                     </React.Fragment> </li>
                  <li className="list-group-item li-css"> 
                        <ShowHit part={this.hitProper.part} power={this.hitProper.power}/>
                  </li>  
                  <li className="list-group-item li-css" >
                      <ProgerssBars hitProper={this.hitProper} allHit={hitData} />
                   </li>
                 </ul>
              </div>
                 <h5>{this.hitProper.ip}
                    <FirebaseDatabaseMutation  type="set" path={`${this.state.path}`}>
                        {({ runMutation }) => (
                            <button  onClick={async () => {
                                runMutation({ "--firstTest":{incr:0, long:0, part:9, power:0, time:"00:00" }});
                                }} > Reset this Fighters
                            </button>
                         )}
                    </FirebaseDatabaseMutation>
                 </h5>
              </div>
            );
          }}
        </FirebaseDatabaseNode>
      </FirebaseDatabaseProvider>
      </div>
      <Footer/>
      </div>
    );
  }

}


