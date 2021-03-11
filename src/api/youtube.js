import axios from "axios";
import React from 'react'

export default class Youtube extends React.Component {
  constructor() {
    super()
    this.state = {
      myPlaylist: []
    }
  }

  componentDidMount() {

    let id = "PLrbsIj7db4PLu4ojmlGtx91FAygLTLs06";
    let api = "AIzaSyClD8w14ZRbLeqUbwq9ou6vqTz4sPIUYeo";
    let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${api}`;

    axios
    .get(url)
    .then((response) => {
      this.setState() ({
        myPlaylist: response.data.items
      })
      console.log(this.state);
    })
    .catch((error) => console.log(error));
  }



render() {
  if (this.state.myPlaylist.length) {
    return <p>{this.state.myPlaylist}</p>;
  } else {
    return <h1>no playlist</h1>;
  }
}
}
