import React from 'react'
import Banner from '../UsefullCommonComponents/Banner/Banner';
import ScrollNav from '../UsefullCommonComponents/ScrollNav/ScrollNav';
import { useState } from "react";
import Leagues from './Leagues';
import Knockouts from './Knockouts';


const Fixtures = () => {
    var games = ["Athletics", "Badminton", "Basket", "Cricket", "Hockey", "Football", "Squash", "Swimming", "Lawn Tennis", "Table Tennis", "Athletics", "Badminton", "Basket"]
    const [onLeague, setOnLeague] = useState(false)
    const [onGame, setOnGame] = useState("Athletics")
    return (
        <>
            <Banner title = "Fixtures"/>
            <ScrollNav games = {games} setOnGame = {setOnGame} onGame = {onGame}/>
            <div className="container mt-5">
                <div className="d-flex justify-content-lg-start justify-content-center">
                    <button onClick={() => setOnLeague(true)} className = {"fs-4 fw-bold border-gradient py-2 px-3 " + (onLeague ? "bg-gradient" : "") } >Leagues</button>
                    <button onClick={() => setOnLeague(false)} className = {"fs-4 fw-bold border-gradient py-2 px-3 " + (!onLeague ? "bg-gradient" : "") } >Knockouts</button>
                </div>
            </div>
            {onLeague ? <Leagues/> : <Knockouts/>}
        </>
  )
}

export default Fixtures