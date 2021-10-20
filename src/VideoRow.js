import React from 'react'
import "./VideoRow.css"

function VideoRow({views,subs,description,timestamp,channel,title,image}) {
    return (
        <div className="videoRow">
            <img src = {image} alt="" />
            <div className="videoRow_text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} *
                    <span className ="videoRow__subs">
                    <span className="videoRow__subsNumber">{subs}  
                    </span> Subsribers 
                    </span> {""}
                    {views} views * {timestamp} Seconds ago</p>
                <p className="videoRow__description">{description}</p>
            </div>


            
        </div>  
    )
}

export default VideoRow
