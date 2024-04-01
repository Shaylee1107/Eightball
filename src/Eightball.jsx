import React, {useReducer, useState} from 'react'
import "./Eightball.css"
import answers from './answers'

const EightBall = () => {
    const original = {msg: "Think of a question", color: 'black'};
    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [goldCount, setGoldCount] = useState(0);
    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('Think of a question');

    const generateNewMessage = () => {
      const idx = Math.floor(Math.random() * answers.length) + 1;
      const msgObj = answers[idx];
      const msgColor = msgObj.color;
      setColor(msgColor);
      updateColorCount(msgColor);
      return(
        msgObj.msg
      )
    }

    const reset = () => {
      setColor(original.color);
      setRedCount(0);
      setGreenCount(0);
      setGoldCount(0);
      return(
        original.msg
        )
    }
   
    const updateColorCount = (msgColor) => {
      if(msgColor === 'red'){
        setRedCount(redCount + 1);
      } 
      if(msgColor === 'green'){
        setGreenCount(greenCount + 1);
      }
      if( msgColor === 'goldenrod'){
        setGoldCount(goldCount + 1);
      }
    }

    return (
      <>
          <div className="container">
            <div onClick={() => setMessage(generateNewMessage)} className="eightBall" style={{backgroundColor: color}}>
              <p className="reading">{message}</p>
            </div>
            <button className="reset" onClick={() => setMessage(reset)}>Reset</button>
            <ul className="color-list-container">
              <li className="color-list">Red: {redCount}</li>
              <li className="color-list">Green: {greenCount}</li>
              <li className="color-list">Gold: {goldCount}</li>
            </ul>
          </div>
      </>
    )
}

export default EightBall