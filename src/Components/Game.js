import React, {useState,useEffect} from 'react'
import Dropdown from './Dropdown'
function Game() {
    const [characters,setCharacters]=useState(['Waldo','Wizard','Oddlaw'])
    const [position,setPosition] = useState({y:0,x:0})
    const [showButton,setShowButton] = useState('none')
    function handleClick(event){
        setPosition({x: event.clientX, y: event.clientY})
        show()
    }
    function show(){
        setShowButton('block')
    }

    return (
      <div className="Game">
        <img src = 'https://simalicrum.github.io/wheres-waldo/waldo.jpg' alt = 'Not Working Try Again Later' onClick = {handleClick}/>
        <Dropdown characters = {characters} position = {position} showButton = {showButton}/>

      </div>
    );
  }
  
  export default Game;
  