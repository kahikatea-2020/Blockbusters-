import React from 'react'
import { Link } from 'react-router-dom'
import movieData from '../../Data/movies.js'
import Result from './Result'

const Movie = ({ match }) => {
    const selection = match.params.id
    console.log(selection)

    const thisMovie = movieData.find(movie => movie.id === Number(selection))

    return (
        <div className="mainMovie">
        <div>
            <h1>{thisMovie.title}</h1>
            <img src={`/images/${thisMovie.Poster}`}/>
        </div>
        <div className="mainMovieDesc">
            <p className="description">{thisMovie.description}</p>
            <h2>Audience Rating: {thisMovie.quality}</h2>
            <h2>Gogan-o-Meter: {thisMovie.stanRating} </h2>
        </div>
        </div>
    )
}


export default Movie