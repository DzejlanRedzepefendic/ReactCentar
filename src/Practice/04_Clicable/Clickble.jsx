import React, { Component } from 'react'

export class Clickble extends Component {
  constructor(props) {
    super(props)
    this.state = { brojac: 0 }
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.setState((prevState) => ({ brojac: prevState.brojac + 1 }))
  }
  render() {
    return (
      <div>
        <h1>{this.state.brojac}</h1>
        <button onClick={this.onClick}>click</button>
      </div>
    )
  }
}

export default Clickble
