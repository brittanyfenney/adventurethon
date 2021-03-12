// import axios from 'axios'

// ACTION TYPES

const UPDATED_USER = 'UPDATED_USER'


// ACTION CREATORS

export const updatedUser = (info) => ({type: UPDATED_USER, info })


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
