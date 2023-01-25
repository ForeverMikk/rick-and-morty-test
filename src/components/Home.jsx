import React from 'react';
import CharacterCard from './CharacterCard';


const Home = () => {
    return(
        <>
            <h1>Top Characters</h1>
            <div className="card-grid">
                <CharacterCard 
                    name='Michael' 
                    image="https://rickandmortyapi.com/api/character/avatar/453.jpeg" 
                    gender='Male' 
                    status='Alive' 
                    species='Mythological Creature' 
                    type='Vampire'
                />
            </div>
        </>
    )
}

export default Home;