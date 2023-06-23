import React, { Component } from "react";
import HeaderSubject from "./HeaderSubject";
import "../Styles/Header.scss";

class Header extends Component {

  render() {
    return (
      <div className="header">
        <HeaderSubject name="Home" handler={this.props.handler}  selected={this.props.index} index={0}/>
        <HeaderSubject name="Movies" handler={this.props.handler}  selected={this.props.index}   index={1}/>
        <HeaderSubject name="About Us" handler={this.props.handler} selected={this.props.index}  index={2}/>
      </div>
    );
  }
}

export default Header;
