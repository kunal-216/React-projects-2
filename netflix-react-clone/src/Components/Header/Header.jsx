import React from 'react'
import logo from "../Header/logo.png"
import avatar from "../Header/avatar.jpg"
import {Link} from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt="logo" />

        <div className='header-div'>
            <div className='left-header-div'>
                <Link to={"/"} style={{color:'white'}}>Home</Link>
                <Link to={"/tvshows"}>TV Shows</Link>
                <Link to={"/movies"}>Movies</Link>
                <Link to={"/new&popular"}>New & Popular</Link>
                <Link to={"/mylist"}>My List</Link>
                <Link to={"/browsebylanguage"}>Browse by Languages</Link>
            </div>
            <div className='right-header-div'>
                <IoSearch size={25} />
                <Link to={"/children"}>Children</Link>
                <FaRegBell size={22} />
                <img src={avatar} alt="avatars" style={{height:35, width: 35, borderRadius: 5}}/>
            </div>
        </div>
        

      </nav>    
    </div>
  )
}

export default Header
