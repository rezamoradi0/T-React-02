import React, { Component } from "react";
class SliderObj extends Component {
  render() {
    return (
      <>
        <img
          src={this.props.image} alt=""
          style={
            this.props.sliderIndex === this.props.index ?{}: { display: "none" }
          }
          className="slider-object"
        />
      </>
    );
  }
}

export default SliderObj;
