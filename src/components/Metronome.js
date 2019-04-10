import React from 'react';

class Metronome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bpm: 100
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({bpm: event.target.value});
  }

  render(){
    return (
      <div id="metronome">
        <div className="bpm-indicator">
          <h3>{this.state.bpm}</h3>
          <p className="bpm-indicator">bpm</p>
        </div>
        <div className="bpm-slider">
          <input type="range" id="slider" name="bpm"
          min="40" max="218" value={this.state.bpm}
          onChange={this.handleChange}></input>
        </div>
      </div>
    );
  }

}

export default Metronome;
