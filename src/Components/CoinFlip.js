import React, { Component } from 'react';
import CoinFace from './CoinFace.js';
import './CoinFlip.css';

class CoinFlip extends Component {
    state = {
        coinFace : null,
        headCount : 0,
        tailCount : 0,
    }

//picks the face of the coin, updates state properties
chooseFace = () => {
    let coinFace = (Math.floor(Math.random() * 2) === 0) ? 'heads' : 'tails';
    this.setState(curState => { 
        return coinFace === 'heads' ? ({ coinFace : coinFace, headCount : curState.headCount + 1 })
        : ({ coinFace : coinFace, tailCount : curState.tailCount + 1 })
    })
}

//Calls the chooseFace function on button click
clickHandler = () => {
    this.chooseFace()
}
  render(){   
    let tailPercent = Math.ceil(this.state.tailCount/(this.state.tailCount + this.state.headCount)*100)+"%";
    let headPercent = Math.ceil(this.state.headCount/(this.state.tailCount + this.state.headCount)*100)+"%";
    return(
        <div className="coinFlip">
            <h1> 100% Fair Coin Flipper <span role="img" aria-label="wink face">😉</span></h1>
            <CoinFace coinFace={this.state.coinFace}/>
            <button className="coinFlipButton" onClick={this.clickHandler}>Click me to Flip this Bitch!</button>
            <div className="faceCounter">
                <span >Number of Tails: {this.state.tailCount} &nbsp; Percent: {tailPercent}</span><br />
                <span >Total Number Heads: {this.state.headCount} &nbsp; Percent: {headPercent}</span><br />
                <span>Total Flips: {this.state.tailCount + this.state.headCount} </span>
            </div>
        </div>
    )
  }
}
export default CoinFlip;
