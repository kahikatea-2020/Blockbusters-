import React from 'react'

const Home = () => {
    return (
        <>
            <div className='description'>
                <h3>Blockbuster is back to help you find a movie to watch!</h3>
                <p>Simply tell us what mood you're in, what genre you'd like, if 
                    you'd like to see recent or older films and we'll present you with a 
                    list of great films to watch.</p>
            </div>
            <div className='homeImage'>
                <img src='https://placedog.net/500' alt='people enjoying blockbuster'></img>
                <button>Click to Start!</button>
            </div>
        </>
    )
}


export default Home