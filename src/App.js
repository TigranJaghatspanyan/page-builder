import React, { Component } from 'react'
import './App.css';
import AddedText from './Components/AddedText';
import Main from "./Components/Main"

export default class App extends Component {
  state = {
    array:[]
  }
  addText = (elem ) =>{
    let array = [...this.state.array, elem ]
    this.setState({
      array : array
    })
  }
  render() {
    return (
      <div className="App">
      <Main addText={this.addText} />
      <AddedText array={this.state.array}/>
  </div>
    )
  }
}

