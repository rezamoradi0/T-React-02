import React, { Component } from "react";

class MovieListItem extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    let {
        imgLink,
        imdbRate,
        movieName,
        movieLink,
        trailerLink,
        isWatchlist,
        isFavirate,
      } = this.props;
return (<div
className="movie-item">
       <img src={imgLink} alt={movieName} />
       <span className="book-mark">

       </span>
      <div className="movie-item-info">
        
      
       <div className="movie-item-line1">
          <span className="movie-item-imdb-score">
            
            <i className="fa-solid fa-star icon" style={{color: " #ffd500"}}></i>
            {imdbRate.replace("/10","")}
          </span>
          <span>
            <i className="fa-sharp fa-regular fa-star icon" style={{color: "#4d84cc"}} ></i>
          </span>
        </div>

      <div className="movie-item-line2">
         <a href={movieLink}>{movieName}</a>
      </div>
       


        <div className="movie-item-line3" >
            <span>
            <i className="fa-sharp fa-solid fa-plus icon"></i>
            </span>
            <span>
                Watchlist
            </span>
        </div>
       
        < a href={trailerLink} className="movie-item-line4">
            <span>
            <i className="fa-solid fa-play icon"></i>
            </span>
            <span>
            Trailer
             
            </span>
        </a>
        </div>
      </div>);

  
/*
    return (
      <div>
        <img src={imgLink} alt={movieName} />
      
        <div>
          <span>
            {" "}
            <i class="fa-solid fa-star" style="color: #ffd500;"></i>
            {imdbRate}
          </span>
          <span>
            <i class="fa-sharp fa-regular fa-star" style="color: #4d84cc;"></i>
          </span>
        </div>

      
        <a href={movieLink}>{movieName}</a>


        <div>
            <span>
            <i class="fa-sharp fa-solid fa-plus"></i>
            </span>
            <span>
                Watchlist
            </span>
        </div>
       
        <div>
            <span>
            <i class="fa-solid fa-play"></i>
            </span>
            <span>
                <a href={trailerLink}>Trailer</a>
            </span>
        </div>
      </div>
    );
    */
  }
}

export default MovieListItem;
