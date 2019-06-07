import React from 'react';

import DrumPad from '../DrumPad/DrumPad';

import './DrumMachine.css';

//  User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad,
//  a unique id that describes the audio clip the drum pad will be set up to trigger,
//  and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
//  The drum pads MUST be in this order.
const DrumKeys = [
  {key: "Q", audioDesc: "Q"},
  {key: "W", audioDesc: "W"},
  {key: "E", audioDesc: "E"},
  {key: "A", audioDesc: "A"},
  {key: "S", audioDesc: "S"},
  {key: "D", audioDesc: "D"},
  {key: "Z", audioDesc: "Z"},
  {key: "X", audioDesc: "X"},
  {key: "C", audioDesc: "C"},
]

class DrumMachine extends React.Component {

  render() {
    return (
      // User Story #1: I should be able to see an outer container
      // with a corresponding id="drum-machine" that contains all other elements.
      <div className="drum-machine" id="drum-machine">
        <div className="drum-key-container">
          <div className="drum-key-grid">
            {DrumKeys.map(drum => <DrumPad keyVal={drum.key} audioDesc={drum.audioDesc}/>)}
          </div>
        </div>
        {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
        <p className="drum-display" id="display">CurrentDrumKey</p>
      </div>
    )
  }
}

export default DrumMachine;