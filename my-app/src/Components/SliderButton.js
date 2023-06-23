import React, { Component } from "react";
class SlidetButton extends Component {
  render() {
    return <>
    
        <img className={"slider-btn "+this.props.className}  src={this.props.sign} onClick={this.props.onClick} alt=""/>
        </>
  }
}

export default SlidetButton;
