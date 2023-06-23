import React, { Component } from 'react';
import "../Styles/AboutUs.scss"
class AboutUs extends Component {
    constructor() {
        super();
        this.thisIndex = 2;
  
    
      }
    render() { 
        return (
            <div className='about-us'
              style={
                this.props.index === this.thisIndex
                  ? { color: "white" }
                  : { display: "none" }
              }
            >
            <p>This For Test (AboutUS)</p>
            </div>
          );
    }
}
 
export default AboutUs;