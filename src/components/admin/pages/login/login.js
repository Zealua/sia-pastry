import React, { Component } from 'react';
import {FirebaseDatabaseNode,
        FirebaseDatabaseMutation}
                         from "@react-firebase/database";
import './login.css';


export default class Login extends Component {

  state = {
    dataBase: null,
    person: null,
    setSensetive : 50,
    setFront : 50,
    setHold : 50
  };

  setDataBase = (data)=>{
    this.setState({dataBase:data});
  }
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

showItems(items){
  var ulList = document.createElement("UL");
  let item=[];
  for(let keyI in this.state.dataBase){
    if(keyI === items){
      for(let tr in this.state.dataBase[keyI]){
        console.log(tr);
        item.push(tr);
      }
    }
  }
  console.log(item);
  item.map((itemList)=>{
    let listItem = document.createElement("LI");
    let text = document.createTextNode(itemList);
    listItem.appendChild(text);
    ulList.appendChild(listItem);
    return null;
  })
  document.getElementsByClassName('list-group')[0].appendChild(ulList);
  //document.getElementById(items).appendChild(ulList);
}

  render() {
    const path = "/data";//this.props.path;
    return (
      <div className="row mb2 allingL">
        <div className="col-md-3">          
          <FirebaseDatabaseNode  path={path}>
          {d => {
              let listChild=[];
              const object = d.value;
              if (object !== null) {
                this.setDataBase(object);
                for (let key in object) {
                  listChild.push(key);
                } 
              }
              let List;
              // let counter=0;
              if(listChild!=null && listChild.length>1){
                 List = () => listChild.map((item)=>{
                  // let eventM=false;
                  let secondItem =[];
                  for(let tr in object[item]){
                    secondItem.push(tr);
                  }
                  let SecondItem;   
                  if(secondItem!=null){
                    SecondItem = () => secondItem.map((secItem) => {
                    console.log("secItem: " + secItem);
                    return(
                      <input id={secItem} key={secItem} type="button" value={secItem} className="list-group-item list-group-item-action" 
                        onClick={()=>this.showItems(secItem)}/>
                    )
                  });};
                  // console.log(SecondItem);
                  return (
                    <dir>
                      <input id={item} key={item} type="button" value={item} className="list-group-item list-group-item-action active" 
                        onClick={()=>this.showItems(item)}/>
                      <SecondItem/>
                    </dir>  
                  );
                 });
              } else {    
                 List =()=>(
                    <li  className="list-group-item">
                      <p>Part Fallse </p><br/>
                    </li>)
               }
              //  console.log(List);
              return (
                <ul className="list-group">
                  <List/>
                  {/* <input key="add-col"  className="list-group-item list-group-item-action" value= "+ add new data" /> */}
                  <FirebaseDatabaseMutation type="set" path={path}>
                  {({ runMutation }) => {
                    var setNewParam =()=>{
                      console.log("Testtt")
                      return null;
                    }
                    return (
                       <div>
                       <input type = "text" className="butnSens" onClick ={setNewParam} />
                                              
                       {/* <button data-testid="test-push"
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
                         </button> */}
                       </div>
                     );
                   }}
               </FirebaseDatabaseMutation>
                </ul>

              );}}
         </FirebaseDatabaseNode>
         </div>
         <div className="row mb9">
           
         </div>
      </div>
    )
  }
}
