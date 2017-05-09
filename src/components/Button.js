import React, { PureComponent } from 'react';

class Button extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showMe: false
    }
  }

  handleClick() {
    this.setState({ showMe : true })
  }

  render() {
      if(this.state.showMe) {
        return (
          <h1 style={{backgroundColor: 'lightgray', padding: 15, margin: 50}}>This is a page to show some info about movies.</h1>
        )
      }else{
        return(
          <button style={{backgroundColor: '#340f31', padding: 15, margin: 100, color:'white'}} onClick={this.handleClick.bind(this)}>What is this page?</button>
        )
      }
  }
}

export default Button
