import React from 'react'
import apiConfig from '../../../api/apiConfig'
import Button from '../../Button/Button'


import './SlideCard.scss'

const SlideCard = props => {
    const item = props.item

    const bgImage = apiConfig.w500Image(item.backdrop_path)

    return (
        <div className='now-slider'>
            <div className='slide-card' style={{ backgroundImage: `url(${bgImage})` }}>

                <div className='slide-card__content'>
                    <div className='slide-card__content__info'>
                        <h2>{item.title}</h2>
                    </div>
                    <div className='slide-card__content__btn'>
                        <Button>Watch now</Button>
                        <Button>Trailer</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideCard
