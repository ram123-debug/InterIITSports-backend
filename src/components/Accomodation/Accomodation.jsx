import React, { useState } from 'react'
import Banner from '../UsefullCommonComponents/Banner/Banner'
import './Accomodation.css';
import AccomodationField from './AccomodationField';
import Divider from '@mui/material/Divider';

function Accomodation() {
    const [onLeague, setOnLeague] = useState(false)
    const [onGame, setOnGame] = useState("Athletics")
    return (
        <>
            <Banner title="Accomodation" />
            <div className='GeneralClass'>
            <div className="accomodation_head">
                <span>Nearby Hotels In</span>
                <div >
                <button onClick={() => setOnLeague(true)} className={"fs-4 fw-bold border-gradient py-2 px-3 " + (onLeague ? "bg-gradient" : "")} >Roorkee</button>
                <button onClick={() => setOnLeague(false)} className={"fs-4 fw-bold border-gradient py-2 px-3 " + (!onLeague ? "bg-gradient" : "")} >Delhi</button>
                </div>
            </div>
            {/* </div> */}
            <hr className='Divider_line' />
            <div className="accomodation_body">
                <AccomodationField />
                <AccomodationField />
                <AccomodationField />
                <AccomodationField />
            </div>
            </div>
        </>
    )
}

export default Accomodation