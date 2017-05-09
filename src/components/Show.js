import React, { PureComponent } from 'react'
import Title from './Title'
import Poster from './Poster'
import Info from './Info'

class Show extends PureComponent {
  render() {
    var show = this.props.show
    return(
      <div className="text-center">
        <Title showTitle={show.title}/>
        <Poster showPoster={show.poster}/>
        <Info showInfo={show.plot} showRating={show.imdbRating}/>
      </div>
    )
  }
}

export default Show
