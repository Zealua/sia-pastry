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
        <div className="col">
          <PhotoSlider amount="9" />
        </div><div className="w-100"></div>
        <div className="coll">
          <div className="row">
            <div className="col col-md-6">
              <img src={require('../../../photo-main/main1.jpg')} alt='' className="eghtproc" style={{width:"100%"}}/>
              {/* <div  id="main1" className="eghtproc" style={styleImage}></div> */}
            </div>
            <div className="col col-md-1"></div>
            <div className="col col-md-5">
              <div className="eghtproc">
                <strong>Ніде так, як в Si.A pastry</strong><br/><br/>
                    Вітаємо в просторі, де ви познайомитесь з достойним кондитерським продуктом!<br/><br/><br/>
                    Для нас це як окремий світ, потрапляючи в який ми занурюємось в процес, від першого граму борошна до готового витвору в коробці з атласною стрічкою. Ще в 2016 році ми здобули тут напрямок, а згодом і власний стиль, в межах якого даємо повну волю фантазії і ідеям. <br/><br/><br/>
                    Ми дві рідні сестри: Аліна - засновник і керівник сегменту кухні, Маріна - відповідальна за зовнішню та організаційну діяльність.<br/><br/><br/>
                    За відточеною рецептурою найкращих кондитерів та частково за своєю власною ми готуємо торти, макарон, капкейки, трайфли, тарти, зефір та неймовірну традиційну випічку!<br/>
              </div>
            </div>
          </div>
        </div><div className="w-100"></div>
        <div className="col">
          <Footer/>
        </div>
      </div>
    );
  }

}


