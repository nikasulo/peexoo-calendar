import React from 'react';
import {Component} from 'react';
import Calendar from 'react-calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  onChange = (date) => this.setState({ date });

  render(){
    return(
      <Calendar
      onChange={ this.onChange }
      value={ this.state.date }/>
    )
  }
}

export default App;