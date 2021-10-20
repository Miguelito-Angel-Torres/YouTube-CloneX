import React , {useState}from 'react'
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
//es7
//https://material-ui.com/es/components/material-icons/#material-icons

function Header(){
    
    const [inputSearch, setInputSearch] = useState("");

    return(
        <div className="header">
            <div className="header__left">
            
                <MenuIcon/>
                <Link to ={`/`} >
                <img  className = "header__logo" src= "http://1000marcas.net/wp-content/uploads/2020/02/YouTube-Logo-2011.jpg" alt=""></img>
                </Link>
                
        
            </div>
            <div className="header__input">

                <input onChange={(e) => setInputSearch(e.target.value)}
                  value={inputSearch} 
                 placeholder="Search" type="text"></input>

                <Link to = {`/search/ ${inputSearch}`}>

                <SearchIcon className="header__inputButton"/>
                
                </Link>
               

            </div>
            <div className="header__icons">
                <a href="https://facebook-clonef.web.app/">
                <VideoCallIcon className="header__icon"/>
                </a>
                <AppsIcon className="header__icon"/>
                <NotificationsIcon className="header__icon"/>
                <Avatar 
                    alt = "Remy Sharp"
                    src="https://www.definicionabc.com/wp-content/uploads/2014/09/Se%C3%B1or.jpg"
            
                />

            </div>
        


        </div>
    )
}

export default Header