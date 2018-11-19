import { RECEIVE_PLAYLIST} from '../actions/playlist_actions';
import {merge} from 'lodash';

const songsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PLAYLIST:
      return action.songs || {};
    default:
      return state;
  }
};

export default songsReducer;
