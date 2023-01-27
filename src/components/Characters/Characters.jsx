import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useState } from 'react';

import './Characters.scss';
import { getCharactersByName } from '../../sevices/characterService';
import CharacterCard from '../CharacterCard/CharacterCard';
import CharactersCarousel from '../CharactersCarousel/CharactersCarousel';

const Characters = () => {

    const [isSearched, setIsSearched] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [input, setInput] = useState();
    const [characters, setCharacters] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setShowLoading(true);

        try {
            const { results } = await getCharactersByName(input);
            setCharacters(results);
            setShowLoading(false);
            setIsSearched(true);
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <InputLabel htmlFor='input'>Characters Name</InputLabel>
                    <Input type='text' id='input' name='input' onChange={handleChange}></Input>
                    <Button type='submit'>Search</Button>
                </FormControl>
            </form>

            {showLoading && <p>Loading...</p>}

            {!isSearched && <CharactersCarousel />}

            {isSearched && 
            <div>
                <h1>Searched Characters</h1>
                <div className="characters-container">
                    {characters && characters.map((char, index) => (
                        <CharacterCard 
                            key={index}
                            id={char.id}
                            gender={char.gender}
                            image={char.image}
                            name={char.name}
                            species={char.species}
                            status={char.status}
                            type={char.type}  
                        />
                    ))}
                </div>
            </div>}

        </>
    )
}

export default Characters;