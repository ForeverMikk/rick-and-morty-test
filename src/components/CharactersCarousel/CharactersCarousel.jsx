import React, { useEffect, useState } from 'react';

import './CharactersCarousel.scss';
import { getTopCharacters } from './../../sevices/characterService';
import CharacterCard from './../CharacterCard/CharacterCard';

const CharactersCarousel = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getTopCharacters();
            setProducts(data);
        }
        fetchData();
    }, [])

    return (
        <div className='characters-carousel'>
            {products.map((character) => (   
                <CharacterCard 
                    name={character.name} 
                    image={character.image} 
                    gender={character.gender}
                    status={character.status}
                    species={character.species}
                    type={character.type}
                />
            ))}
        </div>
    )
}

export default CharactersCarousel;