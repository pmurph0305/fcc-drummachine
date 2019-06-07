import React from 'react';

import './DrumMachine.css';

class DrumMachine extends React.Component {

  render() {
    return (
      // User Story #1: I should be able to see an outer container
      // with a corresponding id="drum-machine" that contains all other elements.
      <div className="drum-machine" id="drum-machine">
        {/* User Story #2: Within #drum-machine I can see an element with a corresponding id="display". */}
        <p className="drum-display" id="display"></p>
      </div>
    )
  }
}

export default DrumMachine;