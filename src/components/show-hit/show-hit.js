import React, { Component } from 'react';
import './show-hit.css';


export default class ShowHit extends Component {

  state = {
  };

  render() {
    const {part,power} = this.props;

    let stylePoint={
                width: Math.cbrt(power)*3.5+"px",
                height: Math.cbrt(power)*3.5+"px",
                lineHeight: Math.cbrt(power)*3.5+"px",
                zIndex: 2,
                left: "0px",
                top:"0px"
        }
    switch(part){
      case 3: stylePoint.left = "80px";
              stylePoint.top  = "210px";
        break;
      case 4: stylePoint.left  = "195px";
              stylePoint.top  = "210px";
              break;
      case 1: stylePoint.left  = "160px";
              stylePoint.top  = "150px";
              break;
      case 2: stylePoint.left  = "115px";
              stylePoint.top  = "150px";
              break;
      default: break;
    }

    function resetHit () {
       stylePoint = {width:0,height:0,lineHeight:0,zIndex:2,left:"0px",top:"0px"};
       console.log("reset HIT done");
    }

    setTimeout(resetHit,2000);

    return (
      <div> 
                     <img src={require('../../body1.png')} alt='d2'/> 
                     <div className="circle" style={stylePoint}>{power}</div>   

      </div>
    )
  }
}
