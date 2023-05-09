import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./ListMovie.css";
const ListMovie = ({movies, inputSearch,rateSearch }) => {

    return (
        <div className='Movieslist'>
        {/*Filter the movies with title/rate */}
            {
                rateSearch !==0?(
            movies.filter(movie =>(( movie.title.includes(inputSearch)) && (movie.rate===rateSearch)))
            
            
            .map(movie => <MovieCard movie={movie}
                key={
                    movie.id
                }/>)):( movies.filter(movie =>( movie.title.includes(inputSearch))).map(movie => <MovieCard movie={movie}
                    key={
                        movie.id
                    }/>))

        } 
        
        
        </div>
    )
}

export default ListMovie