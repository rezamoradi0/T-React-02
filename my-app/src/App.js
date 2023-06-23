import React, { Component } from "react";
import Header from "./Components/Header";
import HeaderBody from "./Components/HeaderBody";
import "./Styles/Body.scss";
import "./Styles/all.css";
class App extends Component {
  constructor(){
    super();
    this.state={
      menuSelector:0
    }

  }
  handler=(value)=>{
    this.setState({menuSelector:value},()=>{
      console.log(this.state.menuSelector);
    });


  }
  render() {
    return (
      <div >
        <Header handler={this.handler} index={this.state.menuSelector} />
        <HeaderBody index={this.state.menuSelector} />
      </div>
    );
  }
}

export default App;
