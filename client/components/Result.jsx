import React from 'react'


const Result = () => {
    return (
        <>
        <div className='Movie-Results'>
            <h1>Your recommendations are:</h1>
            <h3>Click on the poster to learn more</h3>
        </div>
        <div>
            <div><img src='/images/Posters1.png'></img></div>
            <div><img src='/images/Posters15.png'></img></div>
            <div><img src='/images/Posters32.png'></img></div>
        </div>
        <button>Pick for Me</button>
        </>
    )
}

export default Result