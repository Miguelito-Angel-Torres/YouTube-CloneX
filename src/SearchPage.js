import React from 'react'
import './SearchPage.css'
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
// https://material-ui.com/components/material-icons/#material-icons
// https://material-ui.com/es/

/* Ponerlo en la farebase  me falta

https://www.youtube.com/watch?v=NT299zIk2JY&t=9506s*/


export default function SearchPage() {

    const subs = "500k"
    const channe = "Miguel Angel"
    return (

        

        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>



            </div>
            <hr/>
            <ChannelRow
            image  = "https://yt3.ggpht.com/yti/APfAmoFuoeMtVKg5espZNq-HAkiIOQDMrXTz70cYA4Qwag=s88-c-k-c0x00ffffff-no-rj-mo"
            channel = {channe}
            verified
            subs = {subs}
            noOfVideos= {382}
            description="Mickey Maus Con sus Amigos Videos Oficial"

            />
            <hr/>
            <VideoRow
            views ="2.3M "
            subs ={subs}
            description = "Sus amigos de Mickey MAUS hacen una divertida broma..." 
            timestamp = " 5 "
            channel = {channe}
            title = "El GRAN SECRETO DE MICKEY MAUS"
            image ="https://cronicaglobal.elespanol.com/uploads/s1/39/43/08/8/mickey-mouse.jpeg"
            
            />

            <VideoRow
            views ="2.3M "
            subs ={subs}
            description = "Sus amigos de Mickey MAUS hacen una divertida broma..." 
            timestamp = " 5 "
            channel = {channe}
            title = "El GRAN SECRETO DE MICKEY MAUS"
            image ="https://cronicaglobal.elespanol.com/uploads/s1/39/43/08/8/mickey-mouse.jpeg"
            
            />

        <VideoRow
            views ="2.3M "
            subs ={subs}
            description = "Sus amigos de Mickey MAUS hacen una divertida broma..." 
            timestamp = " 5 "
            channel = {channe}
            title = "El GRAN SECRETO DE MICKEY MAUS"
            image ="https://cronicaglobal.elespanol.com/uploads/s1/39/43/08/8/mickey-mouse.jpeg"
            
            />

        <VideoRow
            views ="2.3M "
            subs ={subs}
            description = "Sus amigos de Mickey MAUS hacen una divertida broma..." 
            timestamp = " 5 "
            channel = {channe}
            title = "El GRAN SECRETO DE MICKEY MAUS"
            image ="https://cronicaglobal.elespanol.com/uploads/s1/39/43/08/8/mickey-mouse.jpeg"
            
            />

            
        </div>
    )
}
