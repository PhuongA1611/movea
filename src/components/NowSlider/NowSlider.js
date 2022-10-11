import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper"
import dbApi, { category, movieType } from '../../api/dbApi'

import 'swiper/css';
import "swiper/css/pagination"
import SlideCard from './SlideCard/SlideCard';


const NowSlider = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getSlide = async () => {
            const params = {}
            const response = await dbApi.getMoviesList(movieType.now_playing, { params })

            setItems(response.results.slice(0, 5))
        }

        getSlide()
    }, [])

    return (
        <div className='now-slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={'auto'}
                autoplay={{delay: 2000}}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <SlideCard category={category.movie}
                                item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

export default NowSlider
