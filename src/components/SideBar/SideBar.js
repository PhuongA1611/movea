import React, { useEffect, useState } from 'react'
import dbApi, { category, movieTypeName, tvType, tvTypeName } from '../../api/dbApi'
import 'swiper/css';
import "swiper/css/navigation";

import "./SideBar.scss"
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import Card, { SideCard } from '../Card/Card';

const SideBar = props => {

  const [items, setItems] = useState([])

  const name = props.name
  const category = props.category
  const id = props.id

  useEffect(() => {
    const getTvOnAirs = async () => {
      const params = {}

      const response = await dbApi.getTvList(tvType.on_the_air, { params })

      setItems(response.results.slice(0, 8))
    }

    const getSimilar = async () => {
      const params = {}

      const response = await dbApi.getSimilar(category, id, { params })
      setItems(response.results.slice(0, 3))
    }

    switch (name) {
      case tvTypeName.on_the_air:
        getTvOnAirs();
        break;
      case movieTypeName.similar:
        getSimilar();
        break;
      default: getTvOnAirs();

    }

  }, [])

  return (
    <div className='sidebar'>
      <h2>{name} </h2>

      <div className='sidebar__list'>
        <Swiper
          // navigation={true}
          // modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={'auto'}
          // slidesPerGroup={3}
          direction={'vertical'}>
          {
            items.map((item, i) => (
              <SwiperSlide key={i}>
                <Card category={category} item={item} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>



    </div>
  )
}

export default SideBar
