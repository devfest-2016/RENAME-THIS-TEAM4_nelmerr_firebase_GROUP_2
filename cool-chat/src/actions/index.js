// import {fireBaseLink} from "../constants"
// import {firebase, helpers} from 'redux-react-firebase'
// import {config} from '../reducers'

export function fetchMessages(){
  var database = firebase.database();
  // var messages =
  database.ref('messages').on('value', function(data) {
    // debugger
    data.val()
    console.log(data.val());
  });
}
fetchMessages()
