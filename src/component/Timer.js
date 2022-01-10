import React,{useState,useEffect} from 'react'
import Result from "./result";
import Failure from "./Failure";
import { Link, useNavigate } from 'react-router-dom';


const Timer = ({score}) => {
  const navigate= useNavigate();
    const [countDown, setCountDown] = React.useState(0);
  const [runTimer, setRunTimer] = React.useState(true);

  React.useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(60 * 10);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } 
    
    

    

    return () => clearInterval(timerId);
  }, [runTimer]);

  React.useEffect(() => {
    if (countDown < 0 && runTimer) {
      console.log("expired");
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const togglerTimer = () => setRunTimer((t) => !t);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    console.log(score)

    let result;
    if ( score >= 50 && countDown === 0) {
      result = navigate("/result", {state:{score:score}});
    }
    if (score < 50 && countDown === 0) {
      result = navigate("/fail",{state:{score:score}});
    }
    return (
        <div className='flex flex-col bg-white  w-24 h-24 rounded-full ring-1 text-primary items-center justify-center'>
        <div className=''>
     {minutes}:{seconds}
      </div>

      <button type="button " onClick={togglerTimer}>
        {/* {runTimer ? "Stop" : "Start"} */}
      </button>
    </div>
  );
}




export default Timer
