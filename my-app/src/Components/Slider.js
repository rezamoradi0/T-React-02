import React, { Component } from "react";
import SliderObj from "./SliderObj";
import SlidetButton from "./SliderButton";
import "../Styles/Slider.scss";
import theIcon from "../Images/Icons/icon.png";
import firstImg from "../Images/backdrops/1.jpg"
import secendImg from "../Images/backdrops/2.jpg"
import thiredImg from "../Images/backdrops/3.jpg"

class Slider extends Component {
  constructor() {
    super();
    this.thisIndex = 0;
    this.sliderCount = 2;
    this.state = {
      slidersIndex: 0,
    };

 
  }
  changeDown=()=>{
    let temp=this.state.slidersIndex;
    temp--;
    if(temp<0){
      temp=this.sliderCount;
    }
    this.setState({slidersIndex:temp}
      ,()=>{
        console.log("new Number Is : "+this.state.slidersIndex);
      }
      );
  };
  changeUp=()=>{
    console.log("OnLoad : "+this.state.slidersIndex);
    this.setState({slidersIndex:this.state.slidersIndex+1},()=>{
      if(this.state.slidersIndex>this.sliderCount){
        this.setState({slidersIndex:0},()=>{ console.log(this.state.slidersIndex)});
       
      }else {
        console.log(this.state.slidersIndex);
      }
    
    });
  

    
  };
  
  render() {
    return (
      <div
        className="slider"
        style={
          this.props.index === this.thisIndex
            ? { color: "white" }
            : { display: "none" }
        }
      >
        <div className="slider-dealer">
          <SliderObj image={firstImg} sliderIndex={this.state.slidersIndex} index={0} />
          <SliderObj image={secendImg} sliderIndex={this.state.slidersIndex} index={1} />
          <SliderObj image={thiredImg} sliderIndex={this.state.slidersIndex} index={2} />
          <SlidetButton sign={theIcon} onClick={this.changeDown} className="left" />
          <SlidetButton sign={theIcon}  onClick={this.changeUp} className="right" />
        </div>
      </div>
    );
  }
}

export default Slider;
