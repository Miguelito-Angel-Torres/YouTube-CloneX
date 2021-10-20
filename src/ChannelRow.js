import React from 'react';
import "./ChannelRow.css";
import  Avatar  from '@material-ui/core/Avatar';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';


function ChannelRow({
    image,
    channel,
    verified,
    subs,
    noOfVideos,
    description,}
) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            
            <div className="channelRow__text">
                <h4>
                    {channel } {verified && <VerifiedUserOutlinedIcon/>} 
                </h4>
                <p>{subs} Subscription *{noOfVideos} videos</p>
                <p>{description}</p>


            </div>
            
        </div>
    )
}

export default ChannelRow
