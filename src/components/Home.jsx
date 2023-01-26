import { TextField } from '@mui/material';
import React from 'react';
// import { searchCharacter } from '../sevices/searchService';
import CharactersCarousel from './CharactersCarousel/CharactersCarousel';


const Home = () => {
    return(
        <>
            <h1>Top Characters</h1>
            <div className="card-grid">
               <TextField id='input' label='Character Name' variant='outlined' color='success' focused/>
               <CharactersCarousel />
            </div>
        </>
    )
}

export default Home;