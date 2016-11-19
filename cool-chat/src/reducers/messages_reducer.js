export default function funReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_FUN_MESSAGES':
      return action.payload;
    default:
      return state;
  }
};