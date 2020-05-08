import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.state = { keys: [
      {
        id: 0,
        text: 'A',
        key: 'key',
      },
      {
        id: 1,
        text: 'A#',
        key: 'key'
      },
      {
        id: 2,
        text: 'B',
        key: 'key'
      },
      {
        id: 3,
        text: 'C',
        key: 'key'
      },
      {
        id: 4,
        text: 'C#',
        key: 'key'
      },
      {
        id: 5,
        text: 'D',
        key: 'key'
      },
      {
        id: 6,
        text: 'D#',
        key: 'key'
      },
      {
        id: 7,
        text: 'E',
        key: 'key'
      },
      {
        id: 8,
        text: 'F',
        key: 'key'
      },
      {
        id: 9,
        text: 'F#',
        key: 'key'
      },
      {
        id: 10,
        text: 'G',
        key: 'key'
      },
      {
        id: 11,
        text: 'G#',
        key: 'key'
      }
    ],
      selectedKey: {
        id: 0,
        text: 'A',
        key: 'key'
      },
      chordProgressionView: false
    };
  }

  // we are passing the keys id so we need to retrieve the actual key
  handleKeyChange(selectedKeyChange) {
    console.log("inside handlekeychange, selectedkeychange: " + selectedKeyChange.text);
    this.setState({selectedKey: selectedKeyChange, chordProgressionView: true})
  }

  render() {
    return (
      
      <div className="container">
        <div className="header">music app</div>
        <ChooseKey keys={this.state.keys} selectedKey={this.state.selectedKey}
        onChange={this.handleKeyChange} value={this.state.selectedKey}/>
        {this.state.chordProgressionView && <ChordProgression keys={this.state.keys} selectedKey={this.state.selectedKey}/>}
        <p>{this.state.selectedKey.text}</p>
        <div>
        </div>
      </div>
    );
  }
}

class ChordProgression extends React.Component {
  constructor(props) {
    super(props)
  }

  createButtons = () => {
    let buttons = [];
    var keyIdx = this.props.selectedKey.id;
    console.log("keyIdx::" + keyIdx);
    console.log("selkey::" + this.props.selectedKey.text);
    for (let i = 0; i < 7; i++) {
      
      if (i == 0 | i == 1 | i == 3 | i == 4 | i == 5) {
        buttons.push(<Button variant="primary">{this.props.keys[keyIdx].text}</Button>);
        keyIdx += 2;
      } else {
        buttons.push(<Button variant="primary">{this.props.keys[keyIdx].text}</Button>);
        keyIdx += 1;
      }
      keyIdx %= 12;

    }
    return buttons;

  }

  render() {
    return (
      <div>
        {this.createButtons()}
      </div>
    )
  }
}



class ChooseKey extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  createOptions = () => {
    let options = [];
    const keys = this.props.keys;

    for (let i = 0; i < keys.length; i++) {
      console.log("inside createOptions: " + this.props.selectedKey.text)
      if (keys[i].text === this.props.selectedKey.text) {
        options.push(<option key={i} value={i}>{keys[i].text}</option>)
      } else {
        options.push(<option key={i} value={i}>{keys[i].text}</option>)
      }
    }
    return options;
  }

  handleChange(e) {
    const selectedKey = this.props.keys[e.target.value];
    console.log("inside handlechange: " + e.target.value);
    this.props.onChange(selectedKey)
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <label>Choose key:</label>
        <select id="keys" value={this.props.selectedKey} onChange={this.handleChange}>
          {this.createOptions()}
        </select>
      </div>
      

    )
  }
}

export default App;
