import React, { Component } from "react";
import MoviesCatecory from "./MoviesCatecory";
import MoviesList from "./MoviesList";
import "../Styles/Movies.scss";
class Movies extends Component {
  constructor() {
    super();
    this.thisIndex = 1;
  
  }
  render() {
    return (
      <div className="movies"
        style={
            this.props.index === this.thisIndex
            ? { color: "white" }
            : { display: "none" }
        }
      >
        <MoviesList/>
        <MoviesCatecory/>
      </div>
    );
  }
}

export default Movies;
