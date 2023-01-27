import React, { useState } from 'react';
import { InputLabel, Input, Button, FormControl } from '@mui/material';

import './Episodes.scss';
import EpisodesCarousel from './../EpisodesCarousel/EpisodesCarousel';
import { getEpisodesByName } from '../../sevices/episodeService';
import EpisodeCard from '../EpisodeCard/EpisodeCard';

const Episodes = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [input, setInput] = useState();
    const [episodes, setEpisodes] = useState([]);

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setShowLoading(true);

        try {
            const { results } = await getEpisodesByName(input);
            setEpisodes(results);
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
                    <InputLabel htmlFor='input'>Episode Name</InputLabel>
                    <Input type='text' id='input' name='input' onChange={handleChange}></Input>
                    <Button type='submit'>Search</Button>
                </FormControl>
            </form>

            {showLoading && <p>Loading...</p>}

            {!isSearched && <EpisodesCarousel />}

            {isSearched && 
            <div>
                <h1>Searched Episodios</h1>
                <div className="episodes-container">
                    {episodes && episodes.map((ep) => (
                        <EpisodeCard 
                        airDate={ep.air_date}
                        episode={ep.episode}
                        name={ep.name}
                        key={ep.id}
                        />
                        ))}
                </div>
            </div>}
           
        </>
    )
}

export default Episodes;