import React, { Component } from 'react';
import {FirebaseDatabaseMutation}
                         from "@react-firebase/database";
import './set-sensetive.css';


export default class SetSensetive extends Component {

  state = {
    person: null,
    setSensetive : 50,
    setFront : 50,
    setHold : 50
  };

  setSensF = (event)=>{
    let sensValue=parseInt(event.target.value, 10);
    console.log("S"+sensValue);
    this.setState({setSensetive:sensValue});
  }

  setFrontF=(event)=>{
    const frontValue=parseInt(event.target.value,10);
    this.setState({setFront: frontValue});
      console.log("F"+frontValue);
 }

 setHoldF=(event)=>{
  const holdValue=parseInt(event.target.value,10);
  this.setState({setHold: holdValue});
    console.log("h"+holdValue);
}

  render() {
    const path = this.props.path;
    return (
      <div>
                  
          <FirebaseDatabaseMutation type="set" path={path}>
             {({ runMutation }) => {
                return (
                  <div>
                  <input type = "number" size="4" className="butnSens" onChange ={this.setSensF} /> SENS<br/>
                  <input type = "number" size="4" className="butnSens" onChange ={this.setFrontF}/>FRONT<br/>
                  <input type = "number" size="4" className="butnSens" onChange ={this.setHoldF}/> HOLD<br/>
                  
                  <button data-testid="test-push"
                      onClick={async () => {
                        console.log("s"+this.state.setSensetive+"f"+this.state.setFront+"h"+this.state.setHold);
                        if(this.state.setSensetive>50&&this.state.setSensetive<1000&&
                           this.state.setFront>50&&this.state.setFront<1000&&
                           this.state.setHold>50&&this.state.setHold<1000){
                         const { key } = await runMutation({ PARAM: this.state.setSensetive , 
                                                             Front: this.state.setFront,
                                                             HOLD: this.state.setHold});
                            alert('Hit param set OK');    
                        } else alert("Namber must be integer,more then 50 and less 1000");
                      }}
                    > {this.props.btnText}
                    </button><br/>


                  </div>
                );
              }}
          </FirebaseDatabaseMutation>
      </div>
    )
  }
}
