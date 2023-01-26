import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './CharactersCarousel.scss';
import { getTopCharacters } from './../../sevices/characterService';
import CharacterCard from './../CharacterCard/CharacterCard';

const CharactersCarousel = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await getTopCharacters();
            setProducts(data);
        }
        fetchData();
    }, [])

    return (
        <div className='characters-carousel'>
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
            {
                products.map((character) => (
                    <SwiperSlide key={character.id} >
                        <CharacterCard 
                            name={character.name} 
                            image={character.image} 
                            gender={character.gender}
                            status={character.status}
                            species={character.species}
                            type={character.type}
                        />
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}

export default CharactersCarousel;