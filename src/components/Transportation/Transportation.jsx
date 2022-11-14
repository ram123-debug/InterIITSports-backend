import React, { useState } from 'react'
import Banner from '../UsefullCommonComponents/Banner/Banner';
import TransportationField from './TransportationField';
import './Transportation.css'

function Transportation() {
    const [onLeague, setOnLeague] = useState(false)
    return (
        <>
            <Banner title="Transportation" />
            <div className="Transportation">
                <div className='dIVbOX'>
                    <button onClick={() => setOnLeague(true)} className={"fs-4 fw-bold border-gradient py-2 px-3 " + (onLeague ? "bg-gradient" : "")} >Roorkee</button>
                    <button onClick={() => setOnLeague(false)} className={"fs-4 fw-bold border-gradient py-2 px-3 " + (!onLeague ? "bg-gradient" : "")} >Delhi</button>
                </div>
                <div >
                    <TransportationField />
                    <TransportationField />
                    <TransportationField />
                </div>
            </div>
        </>
    )
}

export default Transportation;