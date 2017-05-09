import React, { PureComponent } from 'react'
import Title from './Title'
import Poster from './Poster'
import Info from './Info'

class Show extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showIndex: (this.props.showIndex || 0)
    }
  }

  handleBtnClick() {
    var totalShows = this.props.shows.length

    this.setState(function(preState) {
      return {
        showIndex: (preState.showIndex + 1) % totalShows
      }
    })
  }

  render() {
    var show = this.props.shows[this.state.showIndex]
    return(
      <div className="text-center">
        <Title showTitle={show.title}/>
        <Poster showPoster={show.poster}/>
        <Info showInfo={show.plot} showRating={show.imdbRating}/>
        <button onClick={this.handleBtnClick.bind(this)}>NEXT</button>
      </div>
    )
  }
}

export default Show
