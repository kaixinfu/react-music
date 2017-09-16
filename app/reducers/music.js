import * as types from '../constants/ActionsTypes'

const initialState = {
    items: {
      list: []
    },
    item: {

    }
};
export default (state = initialState, action) => {
  const {
    type,
    payload
  } = action
  switch (type) {
    case types.GET_MUSIC_LIST:
      return {
        ...state,
        items: {
          list: payload.MUSIC_LIST
        }
      }
      break;
      default:
          return state;
  }
}
