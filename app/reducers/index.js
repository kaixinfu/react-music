import {combineReducers} from 'redux';

import user from './user'
import music from './music'

export default combineReducers({
    user,
    music
})
