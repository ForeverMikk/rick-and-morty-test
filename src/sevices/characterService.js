import axios from 'axios';

const RICK_API = 'https://rickandmortyapi.com/api';

export const getTopCharacters = async() => {
    try {
        const response = await axios.get(`${RICK_API}/character/1,2,3,4,15,16`);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
}

export const getCharactersByName = async(input) => {
    try {
        const response = await axios.get(`${RICK_API}/character/?name=${input}`);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
}