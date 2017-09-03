import {MUSIC_LIST} from '../../config/musicList'

export const getMisucList = _ => (dispatch) => {
  dispatch({
    type: 'GET_MUSIC_LIST',
    payload: {
      MUSIC_LIST
    }
  })
}
