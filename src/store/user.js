// import axios from 'axios'

// ACTION TYPES

const UPDATED_USER = 'UPDATED_USER'


// ACTION CREATORS

export const updatedUser = (info) => ({type: UPDATED_USER, info })


// THUNK CREATORS

// export const updateUser = () => async dispatch => {
//   console.log('iN GET PLAYLIST THUNK')
//   let id = "PLrbsIj7db4PLu4ojmlGtx91FAygLTLs06";
//   let api = "AIzaSyClD8w14ZRbLeqUbwq9ou6vqTz4sPIUYeo";
//   let url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${id}&key=${api}`;
//   try {
//     const { data } = await axios.get(url)
//     console.log('RES IN THUNK =>',data)
//     dispatch(gotPlaylist(data))
//   } catch (error) {

//   }
// }

const defaultUser = {name: 'Friend', inventory: []}

// REDUCER
export default function user(state = defaultUser, action) {
  switch (action.type) {
    case UPDATED_USER:
      return {...state, ...action.info}
  default:
    return state
  }
}
