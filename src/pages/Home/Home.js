import React from 'react'
import { category, movieType, movieTypeName, tvType, tvTypeName } from '../../api/dbApi'
import List from '../../components/List/List'
import NowSlider from '../../components/NowSlider/NowSlider'
import SideBar from '../../components/SideBar/SideBar'
import './index.scss'

const Home = () => {
  return (
    <div className='container'>
      <div className='home main'>
        <SideBar name={tvTypeName.on_the_air}
          category={category.tv} />
        <div className='home__wrapper'>
          <NowSlider />
          <div className='home__wrapper__list'>
            <h2>{movieTypeName.popular}</h2>
            <List
              category={category.movie}
              type={movieType.popular} />
          </div>
          <div className='home__wrapper__list'>
            <h2>{movieTypeName.top_rated}</h2>
            <List
              category={category.movie}
              type={movieType.top_rated} />
          </div>
          <div className='home__wrapper__list'>
            <h2>{tvTypeName.popular}</h2>
            <List
              category={category.tv}
              type={tvType.popular} />
          </div>
          <div className='home__wrapper__list'>
            <h2>{tvTypeName.top_rated}</h2>
            <List
              category={category.tv}
              type={tvType.top_rated} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
