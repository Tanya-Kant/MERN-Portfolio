import React ,{useState}from 'react';
import Home from '../../pages/Home/Home';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "./Layout.css";
import Menus from './Menus/Menus';

const Layout = () => {
  // so that icon change ho jaye on clicking
  const [toggle,setToggle]=useState(true)  //1st-getter fuction, 2nd-setter function hota hai jisme hum values ko manipulate kar sakte hai; true-initial vlaue

  //change toggle
  const handleToggle =() => {
    setToggle(!toggle)
  }
  return (
    <>
    <div className='sidebar-section'>
    <div className={toggle ? 'sidebar-toggle sidebar':'sidebar'}> 
    <div className='sidebar-toggle-icons'>
      
        <p onClick={handleToggle}>
          {
            toggle?     // if-else condition
            ( < MdKeyboardDoubleArrowLeft size={30}/>):
            ( < MdKeyboardDoubleArrowRight  size={30}/>)
          }
        </p>
    </div>
    <Menus toggle ={toggle}/>
    </div>
    <div className='container'>
        <Home/>
    </div>
    </div>
    </>
  )
}

export default Layout