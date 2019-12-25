import React, { Component } from 'react';
import './progress-bar.css';

const styleCount={
    marginLeft:"0px"
}

export default class ProgerssBars extends Component {

    power = {
        Part1: 0,
        Part2: 0,
        Part3: 0,
        Part4: 0,
     };

    setPowerProgress (num,power){
        switch(num){
          case 1:
              for(let key in this.power){this.power[key]=0;}
              this.power.Part1=power;
              break;
          case 2:
          for(let key in this.power){this.power[key]=0;}
              this.power.Part2=power;
              break;
          case 3:
          for(let key in this.power){this.power[key]=0;}
              this.power.Part3=power;
              break;
          case 4:
          for(let key in this.power){this.power[key]=0;}
              this.power.Part4=power;
              break;
          default: break;
          }
       }


    render() {

        let pushHit = ""; 
        let hitPart1=[]; 
        let hitPart2=[]; 
        let hitPart3=[]; 
        let hitPart4=[];      
        const hitProper=this.props.hitProper;
        //const counter=this.props.counter;
        const allHit=this.props.allHit;

       if(allHit.length>0)
        for(let i=0; i<allHit.length;i++){
            if(allHit[i].part===1)
              hitPart1.push(allHit[i].power);
              if(allHit[i].part===2)
                hitPart2.push(allHit[i].power);
                if(allHit[i].part===3)
                  hitPart3.push(allHit[i].power);
                  if(allHit[i].part===4)
                    hitPart4.push(allHit[i].power);
        }
        const countPart1 = (hitPart1.length>0) ? hitPart1.length : 0;
        const countPart2 = (hitPart2.length>0) ? hitPart2.length : 0;
        const countPart3 = (hitPart3.length>0) ? hitPart3.length : 0;
        const countPart4 = (hitPart4.length>0) ? hitPart4.length : 0;
   
        console.log("hitPart1");
        console.log(hitPart1);

        this.setPowerProgress(hitProper.part,hitProper.power);
        if (hitProper.span < 300) {
            pushHit = "HIT";
        } else {
            pushHit = "PUSH !!!";
        }
        const styleProg={
            widthStyle1 : {width: this.power.Part1/50+"%"},
            widthStyle2 : {width: this.power.Part2/50+"%"},
            widthStyle3 : {width: this.power.Part3/50+"%"},
            widthStyle4 : {width: this.power.Part4/50+"%"},
        };

        return (
          <div>
                  <h2 className="margin">This is {pushHit} </h2><br/>
                  <h3 className="red">Hit count: {allHit.length-1} </h3><br/> {/*this.hitProper.counter-4*/}
                
         <div className="label"><h4>Part1</h4></div>
        <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={this.power.Part1/50} aria-valuemin="0" 
                  style={styleProg.widthStyle1} aria-valuemax="100" >
              <span className="justify-content-center position-absolute w-100">{this.power.Part1}</span>
        </div></div><br/>
        <div className="label"><h4>Part2</h4></div>
        <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={this.power.Part2/50} aria-valuemin="0" 
                  style={styleProg.widthStyle2} aria-valuemax="100" >
              <span className="justify-content-center position-absolute w-100">{this.power.Part2}</span>
        </div></div><br/>
        <div className="label"><h4>Part3</h4></div>
        <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={this.power.Part3/50} aria-valuemin="0" 
                  style={styleProg.widthStyle3} aria-valuemax="100" >
              <span className="justify-content-center position-absolute w-100">{this.power.Part3}</span>
        </div></div><br/>
        <div className="label"><h4>Part4</h4></div>
        <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={this.power.Part4/50} aria-valuemin="0" 
                  style={styleProg.widthStyle4} aria-valuemax="100" >
              <span className="justify-content-center position-absolute w-100">{this.power.Part4}</span>
        </div></div><br/>
        <h5>HIT ZONE COUNTER</h5>
        <div className='d-flex' style={styleCount}>
                  <ul className='list-group  list-group-vertical'>
                  <li className="list-group-item counter">
                      <ul className='list-group  list-group-horizontal'>
                          <li className="list-group-item inLi">Part 1 : </li>
                          <li className="list-group-item inLi">{countPart1} </li>
                      </ul>
                    </li>
                    <li className="list-group-item counter">
                      <ul className='list-group  list-group-horizontal'>
                          <li className="list-group-item inLi">Part 2 : </li>
                          <li className="list-group-item inLi">{countPart2} </li>
                      </ul>
                    </li>
                    <li className="list-group-item counter">
                      <ul className='list-group  list-group-horizontal'>
                          <li className="list-group-item inLi">Part 3 : </li>
                          <li className="list-group-item inLi">{countPart3} </li>
                      </ul>
                    </li>
                    <li className="list-group-item counter">
                      <ul className='list-group  list-group-horizontal'>
                          <li className="list-group-item inLi">Part 4 : </li>
                          <li className="list-group-item inLi">{countPart4} </li>
                      </ul>
                    </li>
                    
                  </ul>

        </div>

        </div>
        )
    }

}