import React from 'react';

class MetronomeContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rate: 100,
    };
  }

  render(){
    return(
      <div id="metronome-container">
        <h2>Metronome</h2>
      </div>
    )
  }
}

export default MetronomeContainer;
