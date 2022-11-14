import React from 'react'
import "./Navbar.css"
import {useState} from 'react'

function createNavItem(item, index, setActive, active){
    return (<li key={index} className = "nav-li">
        <div className='center-inside ps-3 ps-lg-0 py-1 py-lg-0'>
            <p onClick={() => {console.log("Clicked"); setActive(index)}}  className={"my-auto " + (active === index ? "active" : "") }> <a className='px-1' href= {"/" + (item === "Home" ? "" : item.toLowerCase())}>{item}</a></p>
        </div>
    </li>)
}
const NavItems = () => {
    const [active, setActive] = useState(1)
    var navbarItems = ["Home", "Draws", "Fixtures", "Results", "Accomodation", "Transportation"]
    return (
        <>
            <ul className='justify-content-between w-100 nav-ul flex-column flex-lg-row py-3 py-lg-0'>
                {navbarItems.map((item, index) => createNavItem(item, index, setActive, active))}
                
            </ul>
        </>
    )
}

export default NavItems