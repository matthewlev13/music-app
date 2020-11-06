import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyChange = this.handleKeyChange.bind(this)
    this.state = { 
      keys: [],
      selectedKey: {
        id: 0,
        text: 'A',
        key: 'key'
      },
      chordProgressionView: false
    };
  }

  componentDidMount(){
    axios.get('http://localhost:4000/getData')
    .then((res) =>{
      this.setState({
        keys: res.data
      })
    });
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
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e){
    console.log("inside the handleButtonClick: " + e.target.value);
  }

  createButtons = () => {
    let buttons = [];
    var keyIdx = this.props.selectedKey.id;
    for (let i = 0; i < 7; i++) {
      if (i == 0 | i == 1 | i == 3 | i == 4 | i == 5) {
        buttons.push(<Button variant="primary" value={this.props.keys[keyIdx].text} onClick={this.handleButtonClick}>{this.props.keys[keyIdx].text}</Button>);
        keyIdx += 2;
      } else {
        buttons.push(<Button variant="primary" value={this.props.keys[keyIdx].text} onClick={this.handleButtonClick}>{this.props.keys[keyIdx].text}</Button>);
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
        <div>
          h a
        </div>
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
        <select id="keys" defaultValue={this.props.selectedKey.text} onChange={this.handleChange}>
          {this.createOptions()}
        </select>
      </div>
      

    )
  }
}

export default App;
