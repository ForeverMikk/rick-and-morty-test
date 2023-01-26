import React, { useEffect, useState } from 'react';

import './EpisodesCarousel.scss';
import { getTopEpisodes } from '../../sevices/episodeService';
import EpisodeCard from '../EpisodeCard/EpisodeCard';

const EpisodesCarousel = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
      const fetchData = async() => {
        const data = await getTopEpisodes();
        setEpisodes(data);
      }

      fetchData();
    }, [])
    

    return (
        <>
            <h1>Top Episodios</h1>
            <div className='episodes-container'>
                {episodes.map((episode) => (  
                    <EpisodeCard 
                        name={episode.name}
                        airDate={episode.air_date} 
                        episode={episode.episode}
                        characters={episode.characters}
                        key={episode.id} 
                        />
                ))}
            </div>
        </>
    )
}

export default EpisodesCarousel;