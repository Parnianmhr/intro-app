import React, { PureComponent } from 'react'

class Poster extends PureComponent {

  render() {
    return(
      <img src={this.props.showPoster} alt="show poster" style={{height:400, width:400}}/>
    )
  }
}

export default Poster
