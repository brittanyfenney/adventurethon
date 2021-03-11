import axios from 'axios'

// ACTION TYPES

const GOT_PLAYLIST = 'GOT_PLAYLIST'


// ACTION CREATORS

const gotPlaylist = playlist => ({type: GOT_PLAYLIST, playlist})


// THUNK CREATORS

export const getPlaylist = () => async dispatch => {
  console.log('iN GET PLAYLIST THUNK')
  let id = "PLrbsIj7db4PLu4ojmlGtx91FAygLTLs06";
  let api = "AIzaSyClD8w14ZRbLeqUbwq9ou6vqTz4sPIUYeo";
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${api}`;
  try {
    const { data } = await axios.get(url)
    console.log('RES IN THUNK =>',data)
    dispatch(gotPlaylist(data))
  } catch (error) {

  }
}

const defaultPlaylist = []

// REDUCER
export default function playlist(state = defaultPlaylist, action) {
  switch (action.type) {
    case GOT_PLAYLIST:
      return action.playlist
  default:
    return state
  }
}
