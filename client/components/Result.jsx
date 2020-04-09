import React from 'react'


const Result = () => {
    return (
        <>
        <div className='Movie-Results'>
            <h1>Your recommendations are:</h1>
            <h3>Click on the poster to learn more</h3>
        </div>
        <div>
            <div><img src='../../server/public/images'></img></div>
            <div><img src=''></img></div>
            <div><img src=''></img></div>
        </div>
        <button>Pick for Me</button>
        </>
    )
}


//\server\public\images
export default Result