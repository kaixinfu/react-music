import {MUSIC_LIST} from '../../config/musicList'
import * as types from '../constants/ActionsTypes'

export const getMisucList = _ => (dispatch) => {
  dispatch({
    type: 'GET_MUSIC_LIST',
    payload: {
      MUSIC_LIST
    }
  })
}
