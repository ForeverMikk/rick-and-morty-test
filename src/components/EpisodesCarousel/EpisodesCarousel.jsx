import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

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
        <div className='episodes-carousel'>
             <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 320,
                        slidesPerView: 1,
                    },
                     // when window width is >= 640px
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                }}  
            >
                {episodes.map((episode) => (
                    <SwiperSlide key={episode.id}>
                        <EpisodeCard 
                            name={episode.name}
                            airDate={episode.air_date} 
                            episode={episode.episode}
                            characters={episode.characters}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default EpisodesCarousel;