import React from 'react';
import Metronome from '../components/Metronome';

class MetronomeContainer extends React.Component {
  render(){
    return(
      <div id="metronome-container">
        <h2>Metronome</h2>
        <Metronome/>
      </div>
    )
  }
}

export default MetronomeContainer;
