import React from 'react'
import  Avatar  from '@material-ui/core/Avatar';
import './VideoCard.css'
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="videoCard">
            <img src={image} className="videoCard__thumbnail" alt =""/>
            <div className="video__info">
                <Avatar className="videoCard__Avatar" alt={channel} src={channelImage}/>
                    <div class="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views}.{timestamp}
                    </p>
                    </div>

            </div>
            
        </div>
    )
}

export default VideoCard;


// https://www.youtube.com/watch?v=NT299zIk2JY&t=3958s en la 1:56