import { RECEIVE_PLAY, RECEIVE_SHUFFLE, RECEIVE_REPEAT, RECEIVE_SONG_QUEUE_CLICK } from '../actions/song_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
const playReducer = (state = {}, action) => {

  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PLAY:
      return Object.assign({}, state, {playing: action.playing, pause: action.pause, requestedSong: action.requestedSong});
    case RECEIVE_SHUFFLE:
      return Object.assign({}, state, {shuffle: action.shuffle});
    case RECEIVE_REPEAT:
      return Object.assign({}, state, {repeat: action.repeat});
    case RECEIVE_SONG_QUEUE_CLICK:
      return Object.assign({}, state, {songQueueClicked: action.clicked});
    case RECEIVE_CURRENT_USER: 
      return Object.assign({}, state, {playing: false, pause: true});
    default:
      return state;
  }
};

export default playReducer;
