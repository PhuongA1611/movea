import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import dbApi, { category } from '../../api/dbApi';
import Card from '../Card/Card'
import 'swiper/css';
import "swiper/css/grid";

import './List.scss'

const List = props => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const getList = async () => {
      let response = null
      const params = {}

      switch (props.category) {
        case category.movie:
          response = await dbApi.getMoviesList(props.type, { params })
          break;
        default:
          response = await dbApi.getTvList(props.type, { params });
      }

      setItems(response.results)
    }

    getList()
  }, [])

  return (
    <div className='list'>
      <Swiper
        grabCursor={true}
        spaceBetween={20}
        slidesPerView={'auto'}
        direction={props.direction}
      >
        {
          items.map((item, i) => (
            <SwiperSlide key={i}>
              <Card category={props.category}
                item={item} />
            </SwiperSlide>
            
          ))
          
        }
      </Swiper>
    </div>
  )
}

export default List
