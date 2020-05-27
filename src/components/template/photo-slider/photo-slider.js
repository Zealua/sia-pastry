import React, { Component } from 'react';

import './photo-slider.css';

export default class PhotoSlider extends Component {
  state = {
    slideIndex : 1,
    imgMy: require('../../../photo-main/body1.jfif')
  };

  componentDidMount(){
    this.interval = setInterval(()=> this.plusSlides(1), 2500);

  }

  showSlides = (n) =>{
    if(n>this.props.amount){
      n=1;
      this.setState({slideIndex:1})
    }
    if(n<1){
      n=this.props.amount;
      this.setState({slideIndex:this.props.amount});
    }
    console.log(n);
    var i;
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      if(document.getElementById("imgKey"+i)!=null)
        document.getElementById("imgKey"+i).style.display="none";
    }
    var newEl = document.getElementById("imgKey"+9);
    if(newEl!=null) newEl.style.display="none";
    if(n>0 && document.getElementById("imgKey" + n) != null){
      document.getElementById("imgKey"+n).style.display="block";
      this.setState({imgMy:require('../../../photo-main/body'+n+'.jfif')})
    }
    if(dots[n-1] != null) dots[n-1].className += " active";
  }

  plusSlides(n){
    console.log("state: "+this.state.slideIndex);
    let newN = this.state.slideIndex + Number(n);
    this.setState({slideIndex:newN});
    this.showSlides(this.state.slideIndex+n);
  }

  currentSlide(n){
    clearInterval(this.interval);
    this.setState({slideIndex:Number(n)})
    this.showSlides(n);
  }

  render(){
  let styleSecond={
    textAlign: "center"
  }
  let styleImage={
    display : "block",
    width: "100%",
    height: "367px",
    background: "url('"+this.state.imgMy+"') no-repeat center center",
    backgroundSize: "100% cover"
  }
  let number=[];
  for(let i=1;i<=this.props.amount;i++){
    number[i-1]=i;
  }
  const Dots = number.map((element) => {
    let dotKey = "dotKey"+element;
    return (
      <span key={dotKey} className="dot" onClick={()=>this.currentSlide(element)}></span>
    );
  });
  const Imagens = number.map((element) => {
    let imgKey = "imgKey"+element;
    let imgMyH = require('../../../photo-main/body'+element+'.jfif');
    let styleImageHide={
      display : "none",
      width: "100%",
      height: "367px",
      background: "url('"+imgMyH+"') no-repeat center center",
      backgroundSize: "100% cover"
    }
    if(element==1)
      styleImageHide.display="block";
    
    return (
      <div  id={imgKey} key={imgKey} className="mySlides fadeMuw" style={styleImageHide}></div>
    );
  });

  return (
  <div>
  <div className="slideshow-container">
    {Imagens}
    <a className="prev" onClick={()=>this.plusSlides(-1)}>&#10094;</a>
    <a className="next" onClick={()=>this.plusSlides(1)}>&#10095;</a>
  </div>
<br/>

  <div style={styleSecond}>
    {Dots}
  </div>
</div>
  );}
};

