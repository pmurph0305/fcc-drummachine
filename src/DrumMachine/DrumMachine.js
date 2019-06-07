import React from 'react';

import DrumPad from '../DrumPad/DrumPad';

import './DrumMachine.css';

//  User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad,
//  a unique id that describes the audio clip the drum pad will be set up to trigger,
//  and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
//  The drum pads MUST be in this order.
const DrumKeys = [
  {key: "Q", audioDesc: "Q", fileName:"Clap-clap.wav"},
  {key: "W", audioDesc: "W", fileName:"Quarter-clap.wav"},
  {key: "E", audioDesc: "E", fileName:"Taxi-clap.wav"},
  {key: "A", audioDesc: "A", fileName:"Damn-hat.wav"},
  {key: "S", audioDesc: "S", fileName:"Kraft-hat.wav"},
  {key: "D", audioDesc: "D", fileName:"Superb-hat.wav"},
  {key: "Z", audioDesc: "Z", fileName:"Dynamite-snare.wav"},
  {key: "X", audioDesc: "X", fileName:"Lame-snare.wav"},
  {key: "C", audioDesc: "C", fileName:"Hashbrown-kick.wav"},
]

class DrumMachine extends React.Component {

  render() {
    return (
      // User Story #1: I should be able to see an outer container
      // with a corresponding id="drum-machine" that contains all other elements.
      <div className="drum-machine" id="drum-machine">
        <div className="drum-key-container">
          <div className="drum-key-grid">
            {DrumKeys.map(drum => <DrumPad key={drum.key} keyVal={drum.key} audioDesc={drum.audioDesc} fileName={drum.fileName}/>)}
          </div>
        </div>
        {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
        <p className="drum-display" id="display">CurrentDrumKey</p>
      </div>
    )
  }
}

export default DrumMachine;