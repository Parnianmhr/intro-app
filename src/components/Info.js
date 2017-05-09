import React, { PureComponent } from 'react'

class Info extends PureComponent {

  render() {
    return(
      <div>
        <p>plot: {this.props.showInfo}</p>
        <h5>IMDB rating: {this.props.showRating}</h5>
      </div>
    )
  }
}

export default Info
