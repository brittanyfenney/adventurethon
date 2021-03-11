import React from 'react';
import { connect } from 'react-redux'
import { getPlaylist } from '../store'

class Player extends React.Component {

  componentDidMount() {
    console.log('YOUTUBE COMPONENT MOUNTED')
    console.log('STATE =>', this.state)
    console.log('PROPS =>', this.props)
    this.props.getPlaylist()

  }

  componentDidUpdate() {
    console.log('YOUTUBE COMPONENT UPDATED')
    console.log('STATE =>', this.state)
    console.log('PROPS =>', this.props)
  }



render() {
  const playlist = this.props.myPlaylist.items
  if (playlist && playlist.length) {
    return (
      <div>
    <p>playlist found!</p>
    <div>
      {playlist.map(song => {
        return (
      <p key={song.id}> {song.id} </p>
      )})}
      </div>
      </div>
      )
  } else {
    return <h1>no playlist</h1>;
  }
}}


// CONTAINER

const mapState = state => {
  return {
    myPlaylist: state.playlist
  }
}

const mapDispatch = dispatch => {
  return {
    getPlaylist() {
      dispatch(getPlaylist())
  }
}}

export default connect(mapState, mapDispatch)(Player)
