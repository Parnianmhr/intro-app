import React, { PureComponent } from 'react';

class Button extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      color: 'blue'
    }
  }
  handleClick() {
    this.setState(function(prevState) {
      return {
        color: (prevState.color === 'blue') ? 'green' : 'blue'
      }
    })
  }
  render() {
    return(
      <div>
        <h1 style={{ color: this.state.color }}>Hello World</h1>
        <button onClick={this.handleClick.bind(this)}>click me</button>
      </div>
    )
  }
}

export default Button
