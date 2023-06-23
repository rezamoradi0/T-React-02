import React, { Component } from 'react';
import Slider from './Slider';
import Movies from './Movies';
import AboutUs from './AboutUs';
import "../Styles/HeaderBody.scss";
class HeaderBody extends Component {


    render() { 
        return (
        <div className='main'>
            
            <Slider index={this.props.index}/>
            <Movies index={this.props.index}/>
            <AboutUs index={this.props.index}/>
        </div>
        );
    }
}
 
export default HeaderBody;