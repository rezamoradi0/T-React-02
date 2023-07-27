import React, { Component } from "react";
import MovieListItem from "./MovieListItem";

import p1 from "../Images/movies/1.jpg";
import p2 from "../Images/movies/2.jpg";
import p3 from "../Images/movies/3.jpg";
import p4 from "../Images/movies/4.jpg";
import p5 from "../Images/movies/5.jpg";
import p6 from "../Images/movies/6.jpg";
import p7 from "../Images/movies/7.jpg";

class MoviesList extends Component {

  MovieFiltering=(selectedCatecoryArray)=>{
    console.log ( this.props.AllMovies);
    let result=  this.props.AllMovies.filter((movieData)=>{
      let resultOfMovie=  this.CheckMovieIs(movieData,selectedCatecoryArray);
      console.log("resultOfMovie  : "+ resultOfMovie);
        return resultOfMovie;
      });
      console.log("result : "+  result);
      return result;
    
 
  }
  CheckMovieIs=(movieData,listOfCatecory)=>{
    let includeThisMovie=false;
    //console.log("listOfCatecory  : "+listOfCatecory)
    if(listOfCatecory.length==0){
     // console.log("Checking  : NoCatecory")
      includeThisMovie=true;
    }
    listOfCatecory.forEach(catecory => {
      //console.log("Checking  : movieData " +movieData.Genre)
      if(movieData.Genre.includes(catecory)&&(this.props.TypedText.length>0&&movieData.Title.toLowerCase().includes(this.props.TypedText.toLowerCase())||this.props.TypedText.length<1)){
       // console.log("Include");
       
        includeThisMovie=true;
        
      }
    });

    return includeThisMovie;
  }

  //     let moviesJson = this.state.moviesJson;
  //     if (moviesJson != null) {
  //       moviesJson.map((moviePost) => {
  //         console.log(" Movie : " + moviePost.Id);
  //         this.setState({
  //           moviesListState:[...this.state.moviesListState,
  //             <MovieListItem
  //               imgLink={p2}
  //               imdbRate={"7.1"}
  //               movieName={"Transformers: Rise of the Beasts"}
  //               movieLink={"./test"}
  //               trailerLink={"./test2"}
  //               isWatchlist={false}
  //               isFavirate={false}
  //             />
  //         ]

  //         });
  //       });
  //     } else {
  //       console.log("is Null");
  //     }
  //   };
  render() {
    return (
      <div className="vertical-list">
        {
           this.props.AllMovies!=null&&this.props.TypedText!=null && 
           this.MovieFiltering(this.props.SelectedCatecory).map((movieData)=> {
            return (
              <MovieListItem
                key={movieData.Id}
                imgLink={movieData.Poster}
                imdbRate={movieData.Ratings[0].Value}
                movieName={movieData.Title}
                movieLink={"./posts/"+movieData.Id}
                trailerLink={"./trailers/"+movieData.Id}
                isWatchlist={false}
                isFavirate={false}
               
              />
            );
           })
        }
        {/* {this.props.AllMovies!=null && 
       
          this.props.AllMovies.map((movieData) => {
           
          
            return (
              <MovieListItem
                key={movieData.Id}
                imgLink={movieData.Poster}
                imdbRate={movieData.Ratings[0].Value}
                movieName={movieData.Title}
                movieLink={"./test"}
                trailerLink={"./test2"}
                isWatchlist={false}
                isFavirate={false}
              />
            );
          })
          } */}
      </div>
    );
  }
}

export default MoviesList;
