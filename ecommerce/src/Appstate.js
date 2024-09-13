import React, { Component } from 'react'
import Propcomponent from './Propcomponent'

export default class App extends Component {
    state =
    {
        tName: "Anushree",
        subject: "FullstackDevelopment"
        
    }
  render() {
    return (
      <div>
        <Propcomponent section = {this.state.section} />
        I am {this.state.tName} student {this.state.subject}
      </div>
    )
  }
}
