import React from 'react';
import { FormControl, InputLabel, Input, Button } from '@mui/material';

import EpisodesCarousel from './../EpisodesCarousel/EpisodesCarousel';

const Episodes = () => {
    return (
        <>
        <FormControl>
            <InputLabel htmlFor='input'>Episode Name</InputLabel>
            <Input id='input'></Input>
            <Button type='submit'>Search</Button>
        </FormControl>
            <h1>Top Episodios</h1>
            <EpisodesCarousel />
        </>
    )
}

export default Episodes;