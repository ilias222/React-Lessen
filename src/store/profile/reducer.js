import * as types from './types'

const initialState = {
  name: 'Goga',
  visible: true,
  isAuhc: false
}

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: payload
      }
    case types.TOGGLE_PROFILE:
      return {
        ...state,
        visible: !state.visible
      }

      case types.ADD_AUCH:
      return {
        ...state,
        isAuhc: payload
      }

    default:
      return state
  }
}