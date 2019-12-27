/*
1. Take in props of -- Heads or Tails
2. Render back the image? 
3. Import the image from the image file?
4. Maybe start with showing the frontandback image and then once the flip is pressed it only shows one?
*/

import React, { Component } from 'react';
import Heads from '../Assets/Heads.jpg';
import "./CoinFace.css";
import Tails from '../Assets/Tails.jpg'
import Both from '../Assets/frontandback.jpg'

class CoinFace extends Component {


faceImagePick() {  
   return (this.props.coinFace === 'heads' ? Heads : (this.props.coinFace === 'tails' ? Tails : Both));
}
altTextSelect() {
    return(this.props.coinFace === 'heads' ? "Heads Coin Face" 
        : (this.props.coinFace === 'tails' ? "Tails Coin Face" 
        : "Heads and Tails Coin Faces"));
}
  render(){
    return(
        <div>            
            <img className="coinFaceImage"
            alt={this.altTextSelect()}
            src={this.faceImagePick()}
            />         
        </div>)
  }
}


export default CoinFace;
