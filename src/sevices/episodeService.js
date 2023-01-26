import axios from 'axios';

const RICK_API = 'https://rickandmortyapi.com/api';

export const getTopEpisodes = async() => {
    try {
        const response = await axios.get(`${RICK_API}/episode/1,2,3,4`);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getEpisodesByName = async(input) => {
    try {
        const response = await axios.get(`${RICK_API}/episode/?name=${input}`);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
}