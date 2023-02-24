
import React,{useState,useEffect} from "react";
function Timer() {
  const [time,setTime] = useState([0,0,0])
  const incrementTime = ()=>{
    if(time[2]=== 59){
      setTime([time[0]+1,0])
    }
    if(time[1]!==59){
      setTime([time[0],time[1]+1])
    }
  }
  useEffect(()=>{
    const intervalId = setInterval(incrementTime,1000)
    return ()=>clearInterval(intervalId)
  })
  return (
    <div className="Timer">
      {time[0]}:{time[1]}
    </div>
  );
}

export default Timer;
