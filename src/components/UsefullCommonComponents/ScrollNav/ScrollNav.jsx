import React from 'react'
function createNavItem(game, index, onGame, setOnGame){
    return (<p key={index} onClick = {() => setOnGame(game)} style={{backgroundColor : (onGame === game ? "white" : "var(--bg-light)"), borderRadius : "3px 3px 0 0", whiteSpace: "nowrap"}} className="ms-0 mx-3 my-0 py-2 px-3"><a> {game} </a></p>)
}
const ScrollNav = (props) => {
  return (
    <div className="container-fluid bg-gradient">
            <div style={{flexWrap : "nowrap", overflowX : "auto", overflowY: "hidden"}} className="container d-flex">
                {props.games.map((game, index) => createNavItem(game, index, props.onGame, props.setOnGame))}
            </div>
    </div>
  )
}

export default ScrollNav