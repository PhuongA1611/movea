import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../api/apiConfig'
import { BiPlayCircle } from 'react-icons/bi'

import './Card.scss'
import { category } from '../../api/dbApi'

const Card = props => {

  const item = props.item

  const link = '/' + category[props.category] + '/' +item.id

  const bgImage = apiConfig.w500Image(item.poster_path)


  return (
    <Link to={link} >
      <div className='card' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='card__content'>
          <button><BiPlayCircle /></button>
          <h3>{item.title || item.name}</h3>
        </div>
      </div>
      
    </Link>
  )
}


export default Card
