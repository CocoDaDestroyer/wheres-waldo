import { useState, useEffect } from 'react';

function Dropdown(props) {
    const [notFound, setNotFound]= useState([])
    const [pos,setPos]= useState({x:0,y:0})
    const [show,setShow] = useState('none')
    function updateCharacters(){
        setNotFound(props.characters)
    }
    function updatePos(){
        setPos(props.position)
    }
    function updateShow(){
        setShow(props.showButton)
    }
    useEffect(()=>{
        if (props.characters !== notFound) {
            setNotFound(props.characters)
          }
          if (props.position !== pos) {
            setPos(props.position)
          }
          if (props.showButton !== show) {
            setShow(props.showButton)
          }
    },[props.characters,props.showButton,props.position])
  return (
    <div style={{position:'absolute', display: show ? 'block' : 'none' ,left:`${pos.x}px`,top:`${pos.y}px`}}>
        {notFound.map((not)=>{
            return <button>{not}</button>
        })}
    </div>
  );
}
export default Dropdown