import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import { RECEIVE_QUERIED_SONGS } from '../actions/song_actions';
import { RECEIVE_ARTIST } from '../actions/artist_actions';
import {merge} from 'lodash';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PLAYLIST:
    case RECEIVE_ALBUM:
    case RECEIVE_QUERIED_SONGS:
      return action.songs || {};
    case RECEIVE_ARTIST:
      return action.songs
    default:
      return state;
  }
};

export default songsReducer;
