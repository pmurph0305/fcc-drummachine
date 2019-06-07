import React from 'react';
import './DrumPad.css';



const DrumPad = ({keyVal, audioDesc, fileName}) => {
  return (
    <button className="btn btn-primary drum-pad" id={audioDesc}>
    {keyVal}
    {/*  Within each .drum-pad, there should be an HTML5 <audio> element which has a src attribute pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.). */}
      <audio className="clip" id={keyVal}  src={process.env.PUBLIC_URL +"/DrumSamples/"+fileName} type="audio/wav"/>
    </button>
  )
}

export default DrumPad;