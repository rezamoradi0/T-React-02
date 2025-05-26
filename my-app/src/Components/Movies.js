import React, { Component } from "react";
import MoviesCatecory from "./MoviesCatecory";
import MoviesList from "./MoviesList";
import "../Styles/Movies.scss";
class Movies extends Component {
  constructor() {
    super();
    this.thisIndex = 1;
    console.log("TEST 3");
    this.state = {
      moviesJson: null,
      catecorys: [],
      seletedCat:[""],
      selelctedCatecory:"",
      typedText:""
    };
    
  }
  
  componentDidMount = () => {
    this.GetMoviesInformtaion();
  };
  GetMoviesInformtaion = () => {
    fetch("/api/movies.json")
      .then((response) => response.json())
      .then((moviesJosnData) => {
      //   console.log("moviesJosnData"+ moviesJosnData);
        this.setState({ moviesJson: moviesJosnData });
        this.AddCatecory(moviesJosnData);
      });
  };
  AddCatecory = (allMoviesJson) => {
    //console.log(catecory);
    let newCateArray=this.state.catecorys;
    allMoviesJson.map((movieInfo)=>{
      let   catecory=movieInfo.Genre.replaceAll(" ","");

      let splitedCates = catecory.split(",");
    
      //console.log("splitedCates :" + splitedCates);
      for (let i = 0; i < splitedCates.length; i++) {
        if (!newCateArray.includes(splitedCates[i])) {
          //console.log("splitedCates : "+splitedCates[i]);
          newCateArray.push(splitedCates[i]);
        }
      }
      //console.log(newCateArray);
      this.setState(
        { catecorys:  newCateArray },
        () => {
          //console.log("this.state.catecorys "+this.state.catecorys);
        }
      );

    })
    
  };
  SelectCatecory=(catecory)=>{
    console.log("catecory clicked");
    this.setState({
      seletedCat:[catecory],    selelctedCatecory:catecory
    });
  }
  ResetCatecory=()=>{
    this.setState({
      seletedCat:[],    selelctedCatecory:"all"
    });
  }
SetSearchText=(text)=>{
  this.setState({
    typedText:text
  })
}
//   ResetCatecory=(catecory)=>{
//  let catecoryIndex=   this.state.seletedCat.indexOf(catecory)
//  if(catecoryIndex>-1){
//   this.setState({
//     seletedCat:this.state.seletedCat.splice(catecoryIndex,1)
//   }); 
//  }
//   }
  render() {
    return (
      <div className="movies"
        style={
            this.props.index === this.thisIndex
            ? { color: "white" }
            : { display: "none" }
        }
      >
      
        <MoviesList TypedText={this.state.typedText} AllMovies={this.state.moviesJson} SelectedCatecory={this.state.seletedCat}/>
        <MoviesCatecory SetSearchText={this.SetSearchText} SelectedCatecory={this.state.selelctedCatecory} SelectCatecory={this.SelectCatecory}  ResetCatecory={this.ResetCatecory} AllCatecorys={this.state.catecorys}/>
      </div>
    );
  }
}

export default Movies;
