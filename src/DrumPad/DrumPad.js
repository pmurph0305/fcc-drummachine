import React from 'react';
import './DrumPad.css';



const DrumPad = ({keyVal, audioDesc}) => {
  return (
    <button className="btn btn-primary drum-pad" id={audioDesc}>{keyVal}</button>
  )
}

export default DrumPad;