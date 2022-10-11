import React from 'react'
import { useParams } from 'react-router-dom'
import { movieType, movieTypeName } from '../../api/dbApi'
import SideBar from '../../components/SideBar/SideBar'

import './Detail.scss'

const Detail = () => {

  const { category, id } = useParams()

  return (
    <div className='detail main'>
      <SideBar name={movieTypeName.similar}
        category={category}
        id={id}
      />

    </div>
  )
}

export default Detail
