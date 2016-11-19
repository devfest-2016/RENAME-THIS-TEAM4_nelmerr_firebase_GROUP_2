import * as types from '../actions';
import {browserHistory} from 'react-router';

export default function messagesReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_MESSAGES':
      return action.payload;
    case 'POST_MESSAGE':
      return action.payload;
    default:
      return state;
  }
};
