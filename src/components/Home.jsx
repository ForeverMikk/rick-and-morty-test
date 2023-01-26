import React from 'react';
import CharactersCarousel from './CharactersCarousel/CharactersCarousel';


const Home = () => {
    return(
        <>
            <h1>Top Characters</h1>
            <div className="card-grid">
               <CharactersCarousel />
            </div>
        </>
    )
}

export default Home;