import * as types from '../profile/types'

// export const changeName = (data) => {
//   return {
//     type: types.CHANGE_NAME, 
//     payload: data
//   }
// }

export const changeName = (data) => ({
  type: types.CHANGE_NAME,
  payload: data
})

export const toggleProfile = () => ({
  type: types.TOGGLE_PROFILE
})

export const auch = (auch) => ({
  type: types.ADD_AUCH,
  payload: auch
})