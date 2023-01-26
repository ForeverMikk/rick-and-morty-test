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
    let episodesList = [];

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        let {results} = await getEpisodesByName(input);
        
        setTimeout(function(){
            setShowLoading(false);
            setIsSearched(false);
        }, 3000);

        setShowLoading(true);

        episodesList = results;
        console.log(episodesList);
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

            <div className="episodes-container">
                {episodesList && episodesList.map((ep) => (
                    <EpisodeCard 
                        airDate={ep.air_date}
                        episode={ep.episode}
                        name={ep.name}
                        key={ep.id}
                    />
                ))}
            </div>
           
        </>
    )
}

export default Episodes;