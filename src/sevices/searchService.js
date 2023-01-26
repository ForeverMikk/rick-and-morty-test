import axios from 'axios';

const RICK_API = 'https://rickandmortyapi.com/api';

export const searchCharacter = async(input) => {
    try {
        const response = await axios.get(`${RICK_API}/character?name=${input}`);
        const data = response.data;

        return data;
    } catch (err) {
        console.log(err);
    }
}