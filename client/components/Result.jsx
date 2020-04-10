import React from 'react'
import { Link } from 'react-router-dom'
import movieData from '../../Data/movies.js'


const Result = ({ match }) => {
    const selection = match.params.choice
    const narrowDown = movieData.filter(movie => movie.mood === selection)

    return (
        <>
            <div className="resultsdiv">
                <div className='Movie-Results'>
                    <h3>Your recommendations for {selection} movies are:</h3>
                    <h3>Click on the poster to learn more</h3>
                </div>
                <div className="resultImage">
                    <div className="resultsDisplay">
                        {narrowDown.map((movie, key) => {
                            return (
                                    <div className="resultsCollection">
                                        <Link className="listImage" to={`/Movie/${movie.id}`}><img className="listImage" src={`/images/${movie.Poster}`} /> </Link>
                                        <h3 className="listItem">{movie.title}</h3>
                                    </div>
                            )
                        })}

                    </div>

                </div>
                    <div className="pickMeButton">
                        <button className="button">Pick for Me</button>
                    </div>
            </div >
        </>
    )
}


export default Result