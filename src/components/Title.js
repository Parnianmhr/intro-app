import React, { PureComponent } from 'react'

class Title extends PureComponent {

  render() {
    return(
      <h3>Title: {this.props.showTitle} </h3>
    )
  }
}

export default Title
