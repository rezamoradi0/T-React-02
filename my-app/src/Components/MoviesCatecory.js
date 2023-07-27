import React, { Component } from "react";
import Catecory from "./Catecory";

class MoviesCatecory extends Component {
inputHandler=(event)=>{
  this.props.SetSearchText(event.target.value);
}

  render() {
    return (
      <div className="catecory-list">
       <div className="the-movie-search-box">
       <input type="text" name="movie" onChange={this.inputHandler}/>
       <i className="fa-regular fa-magnifying-glass"></i>
       </div>
        <Catecory
          SelectCatecory={this.props.SelectCatecory}
          Item=""
          key="all"
          SelectdCatecory={this.props.SelectedCatecory}
          name="All"
        />
          
        {this.props.AllCatecorys.map((item) => {
          return (
            <Catecory
            SelectCatecory={this.props.SelectCatecory}
            Item={item}
           key={item}
           SelectdCatecory={this.props.SelectedCatecory}
            />
             
          );
          
        })}
      </div>
    );
  }
}

export default MoviesCatecory;
