import React, { Component } from 'react'

export default class MyClassComponent2 extends Component {
  render() 
  {
    this.state = {
        sname: "Anu"
      };
    return (
      <div>
        <center>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/w8q0C-C1js4?si=vFYAMbzDCaX7w6NQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        <h3> Welcome {this.state.sname} , for React "State" </h3>
        </center>
      </div>
    )
  }
}


