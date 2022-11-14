import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect, useRef } from "react";
import NavItems from './NavItems';


function useOutsideAlerter(ref, setOnMenu, wrapperRefMenu) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && !wrapperRefMenu.current.contains(event.target)) {
          setOnMenu(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
}

const Navbar = () => {
    var [onMenu, setOnMenu] = useState(false);
    const wrapperRef = useRef(null);
    const wrapperRefMenu = useRef(null);
    useOutsideAlerter(wrapperRef, setOnMenu, wrapperRefMenu);
    return (
        <>
        {onMenu ? <div className='d-lg-none' ref = {wrapperRef} style={{position : "absolute", top : "69px", backgroundColor : "white", zIndex : "10", width : "100%"}}> <NavItems/> </div>:""}
        <section ref={wrapperRef} style={{ height: "69px" }} className="p-1">
            <div className='container h-100'>
                <div className='row justify-content-between h-100'>
                    <div className='col-lg-2 col-4 h-100'>
                        <div className='center-inside'>
                            <a href='/'><img style={{ width: "80%" }} src='https://drive.google.com/uc?export=view&id=1gHQVcp7sY72XAoYsYNZAIP-QT2y_3tP-'></img></a>
                        </div>
                    </div>
                    <div className='col-6 d-none d-lg-block'>
                        <div className='d-flex justify-content-between h-100'>
                            <NavItems />
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div ref={wrapperRefMenu} className="center-inside text-end justify-content-end">
                            <MenuIcon onClick = {() => setOnMenu(!onMenu)} className="d-block d-lg-none" />
                            <button className="border-gradient py-2 px-3 d-none d-lg-block">Contact Us</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default Navbar
