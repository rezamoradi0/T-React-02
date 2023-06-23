import React, { Component } from 'react';
import MovieListItem from './MovieListItem';

import p1 from "../Images/poster/1.jpg"
import p2 from "../Images/poster/2.jpg"
import p3 from "../Images/poster/3.jpg"
import p4 from "../Images/poster/4.jpg"
import p5 from "../Images/poster/5.jpg"
import p6 from "../Images/poster/6.jpg"
import p7 from "../Images/poster/7.jpg"


class MoviesList extends Component {
 
    render() { 
        return (<div className="vertical-list">
             <MovieListItem imgLink={p1} imdbRate={"6.2"} movieName={"Fast X"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p2} imdbRate={"7.1"} movieName={"Transformers: Rise of the Beasts"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p3} imdbRate={"6.5"} movieName={"The Covenant"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p4} imdbRate={"8.3"} movieName={"Creed III"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p5} imdbRate={"6.6"} movieName={"The Dark Knight"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p6} imdbRate={"7.7"} movieName={"The Boogeyman"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p7} imdbRate={"6.7"} movieName={"The SpiderMan"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p1} imdbRate={"6.2"} movieName={"Fast X"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p2} imdbRate={"7.1"} movieName={"Transformers: Rise of the Beasts"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
             <MovieListItem imgLink={p3} imdbRate={"6.5"} movieName={"The Covenant"} movieLink={"./test"} trailerLink={"./test2" } isWatchlist={false}  isFavirate={false}/>
            
        </div>);
    }
}
 
export default MoviesList;