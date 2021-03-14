import axios from "axios";

// ACTION TYPES

const GOT_PLAYLIST = "GOT_PLAYLIST";
const ADD_SINGLE = "ADD_SINGLE";

// ACTION CREATORS

const gotPlaylist = (playlist) => ({ type: GOT_PLAYLIST, playlist });
export const addSingle = (single) => ({ type: ADD_SINGLE, single });

// THUNK CREATORS

export const getPlaylist = () => async (dispatch) => {
  let id = "PLrbsIj7db4PLu4ojmlGtx91FAygLTLs06";
  let api = "AIzaSyClD8w14ZRbLeqUbwq9ou6vqTz4sPIUYeo";
  let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${api}`;
  try {
    const { data } = await axios.get(url);
    dispatch(gotPlaylist(data));
  } catch (error) {}
};

const defaultPlaylist = [];

// REDUCER
export default function playlist(state = defaultPlaylist, action) {
  switch (action.type) {
    case GOT_PLAYLIST:
      return action.playlist;
    case ADD_SINGLE:
      return [...state, action.single];
    default:
      return state;
  }
}
