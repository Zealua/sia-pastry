import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './contact-us.css';

import Header from "../../header"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class ContactUs extends Component {

  state = {
    pushedKey: '',
    path: "HS1/"
  };
  static defaultProps = {
    center: {
      lat: 50.385342,
      lng: 30.455506
    },
    zoom: 11
  };

  render(){
  

    return(
      <div>
        <Header/>
        <div  className="contactAs">
          <div class="jumbotron">
            <p className="firstText">- Контакти</p>
            <div className="secomdText">
              <p class="lead">вул. Вільямса 14/19</p>
              <p class="lead">+38 097 077 22 72</p>
              <p class="lead">si.a.pastry@gmail.com</p>
            </div>
            <p className="firstText">— Запитання і пропозиції</p>
            <p class="lead secomdText">si.a.pastry@gmail.com</p>

            <div style={{ height: '75vh', width: '70%' }} className="GoogleMap">
              <GoogleMapReact
                apiKey='AIzaSyCcip7g12WGv52sDFYpRdnQGRjwRjNEiRQ' // set if you need stats etc ...
                center={this.props.center}
                zoom={this.props.zoom}>
                <AnyReactComponent lat={50.385342} lng={30.455506} text={'SIA-PASTRY'} />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


