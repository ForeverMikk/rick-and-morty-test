import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: {
            input: '',
            episodesList: [],
            charactersList: []
        }
    },
    reducers: {
        saveInput(state, action) {
            const input = action.payload;

            state.data.input = input;
        },
        saveEpisodes(state, action) {
            const episodesList = action.payload;

            state.data.episodesList = episodesList();
        },
        saveCharacters(state, action) {
            const charactersList = action.payload;

            state.data.charactersList = charactersList(); 
        }
    }
})

export const searchActions = searchSlice.actions;

export default searchSlice;