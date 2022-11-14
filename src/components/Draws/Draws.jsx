import React from 'react'
import { useState } from 'react'
import Banner from '../UsefullCommonComponents/Banner/Banner'
import ScrollNav from '../UsefullCommonComponents/ScrollNav/ScrollNav'

import DrawsGame from './DrawsGame'

const Draws = () => {
    var games = ["Athletics", "Badminton", "Basket", "Cricket", "Hockey", "Football", "Squash", "Swimming", "Lawn Tennis", "Table Tennis", "Athletics", "Badminton", "Basket"]

    const [onGame, setOnGame] = useState("Athletics")

    return (
    <>
        <Banner title = "Draws"/>
        <ScrollNav games = {games} setOnGame = {setOnGame} onGame = {onGame}/>
        
        <DrawsGame game = {onGame}/>

        <div className='container mt-5'>
            
        </div>    
    </>
  )
}

export default Draws