import React from 'react';
import { FormControl, InputLabel, Input, Button, createTheme } from '@mui/material';

import EpisodesCarousel from './../EpisodesCarousel/EpisodesCarousel';

const theme = createTheme({
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1rem',
            color: '#16ACC9',
            background: '#D2DA4B'
          },
        },
      },
    },
  });

const Episodes = () => {
    return (
        <>
        <FormControl>
            <InputLabel htmlFor='input' theme={theme}>Episode Name</InputLabel>
            <Input id='input'></Input>
            <Button type='submit'>Search</Button>
        </FormControl>
            <h1>Top Episodios</h1>
            <EpisodesCarousel />
        </>
    )
}

export default Episodes;