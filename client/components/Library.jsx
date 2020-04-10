import React from 'react'
import MovieData from '../../Data/movies.js'
import { Link } from 'react-router-dom'

const movie = MovieData.map(movie => {
    movie.mood  
})

const Library = () => {
    
    return (
        <form>
        <h3>What kind of mood are you in?</h3>
        <div className="formDiv">
            <div className="formButton">
                <Link  to='./Result/sad'>
                    <button className="buttonForm" >Sad</button>
                </Link>
                <Link  to='./Result/fun'>
                    <button className="buttonForm" >Fun</button>
                </Link>
                <Link  to='./Result/nostalgic'>
                    <button className="buttonForm">Nostalgic</button>
                </Link>
                <Link  to='./Result/weird'>
                    <button className="buttonForm">Weird</button>
                </Link>
                <Link  to='./Result/schlocky'>
                    <button className="buttonForm">Schlocky</button>
                </Link>
                <Link  to='./Result/intense'>
                    <button className="buttonForm">Intense</button>
                </Link>        
            </div>
        </div>
        </form>
    )
}

export default Library