import React, { PureComponent } from 'react'
import Title from './Title'
import Poster from './Poster'
import Info from './Info'


class Show extends PureComponent {

  render() {
    return(
      <div className="text-center">
        <Title />
        <Poster />
        <Info />
      </div>
    )
  }
}

export default Show
