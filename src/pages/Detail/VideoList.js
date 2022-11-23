import React, { useEffect, useState } from 'react'
import dbApi from '../../api/dbApi'

const VideoList = props => {
    const category = props.category
    const id = props.id
    const [videos, setVideos] = useState([])
    useEffect(() => {
        const getVideos = async () => {
            let res = null
            const params = {}
            res = await dbApi.getVideo(category, id, { params })
            setVideos(res.results);
        }
        getVideos()
        console.log(videos);
    }, [category, id])
    return (
        <div className='videos'>
            <h3>Teaser</h3>
            <ol className='scroller'>
                {
                    videos.map((item, i) => (
                        <li key={i}>
                            <div className='video'>
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.key}`}
                                    width="100%"
                                    height="100%"
                                    title="video"
                                ></iframe>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default VideoList
