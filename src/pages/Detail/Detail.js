import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import dbApi from '../../api/dbApi'
import { AiFillHeart, AiOutlineLine } from 'react-icons/ai'

import './Detail.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import VideoList from './VideoList'

const Detail = () => {
  const { category, id } = useParams()
  const [detail, setDetail] = useState(null)
  useEffect(() => {
    const getContent = async () => {
      let res = null
      let credit = null
      const params = {}
      res = await dbApi.getDetail(category, id, { params })
      credit = await dbApi.getCredit(category, id, { params })
      let detail = { ...res, ...credit }
      setDetail(detail)
    }
    getContent()
  }, [category, id])
  return (
    <>
      {
        detail && (
          <div className='detail'>
            <div className='detail__view'>
              <div className='detail__bg' style={{ backgroundImage: `url(${apiConfig.originalImage(detail.backdrop_path)})` }}>
              </div>
              <div className='container detail__info'>
                <div className='detail__info__poster'>
                  <img src={apiConfig.w500Image(detail.poster_path)}></img>
                </div>
                <div className='detail__info__content'>
                  <h3>{detail.title || detail.name}</h3>
                  <div className='vote-count'>
                    {detail.runtime && <span>{Math.floor(detail.runtime/60)}h{detail.runtime%60}m</span>} 
                    {detail.episode_run_time && <span>{detail.episode_run_time} episode</span>}
                    <AiOutlineLine />
                    <span>{detail.vote_count}</span>
                    <AiFillHeart />
                  </div>
                  <h5>{detail.tagline}</h5>
                  <h4>Overview</h4>
                  <p>{detail.overview}</p>
                  <div className='detail__info__genres'>
                    {
                      detail.genres && detail.genres.map((genre, i) => (
                        <Link key={genre.id}>{genre.name}</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='container'>
              <h3>Cast</h3>
              <ol className='cast scroller'>
                {
                  detail.cast && detail.cast.map((per, i) => (
                    <li key={i}>
                      <Link>
                        <div className='cast__item'>
                          <div className='cast__item__img'>
                            <img src={apiConfig.originalImage(per.profile_path)}></img>
                          </div>
                          <div className='cast__item__name'>
                            <h5>{per.name}</h5>
                            <p>{per.character}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))
                }
              </ol>
            </div>
            <div className='container'>
                <VideoList category={category} id={id} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Detail
