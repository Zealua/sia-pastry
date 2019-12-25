import React, { Component } from 'react';
import './property-list.css';


export default class PropertyList extends Component {

    render() {

        const property=this.props.property;
        return (
          <div className="property">
               <ul className="list-group list-group-horizontal">
                    <li className="list-group-item marg">
                        <ul className="list-group marg ">
                            <li className="list-group-item marg " >  Part:      </li>
                            <li className="list-group-item marg">    Distance:  </li> 
                            <li className="list-group-item marg">    Power:     </li>
                            <li className="list-group-item marg">    Span:      </li>
                            <li className="list-group-item marg">    Time:      </li>
                         </ul></li>
                    <li className="list-group-item marg" >
                        <ul className="list-group marg">
                            <li className="list-group-item marg" >  {property.part}  </li>
                            <li className="list-group-item marg" >  {property.long}  </li> 
                            <li className="list-group-item marg">   {property.power} </li>
                            <li className="list-group-item marg">   {property.span}  </li>
                            <li className="list-group-item marg">   {property.time}  </li>
                        </ul>
                    </li></ul>
         </div>
        )
    }

}