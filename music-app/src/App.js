import React from 'react';
//import logo from './logo.svg';
import './App.css';

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
      selectedKey: ""};
  }

  // we are passing the keys id so we need to retrieve the actual key
  handleKeyChange(selectedKeyChange) {
    this.setState({selectedKey: selectedKeyChange})
  }

  render() {
    return (
      <div className="container">
      <div className="header">music app</div>
      <ChooseKey keys={this.state.keys} selectedKey={this.state.selectedKey}
      onChange={this.handleKeyChange} value={this.state.selectedKey}/>
      <p>{this.state.selectedKey}</p>
      </div>
    );
  }
}

class ChordProgression extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        
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
      if (keys[i].text === this.props.selectedKey) {
        options.push(<option value={keys[i].text}>{keys[i].text}</option>)
      } else {
        options.push(<option>{keys[i].text}</option>)
      }
      
    }
    return options;
  }

  handleChange(e) {
    const selectedKey = e.target.value
    //console.log("selectedKey: " + selectedKey + ", this.props: " + this.props.keys)
    this.props.onChange(selectedKey)
    //console.log("selectedKey:" + selectedKey)
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
