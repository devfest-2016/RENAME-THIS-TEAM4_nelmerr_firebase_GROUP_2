// import {fireBaseLink} from "../constants"
// import {firebase, helpers} from 'redux-react-firebase'
// import {config} from '../reducers'
// import * from '../../public/index.html'
import Firebase from 'firebase';
// import _ from 'lodash';
import {
  FETCH_MESSAGES,
  POST_MESSAGE
} from '../reducers/messages_reducer'

const Messages = new Firebase('https://voxpopuli-ff652.firebaseio.com/')

export function fetchMessages() {
  return dispatch => {
    Messages.on('value', snapshot => {
      dispatch({
        type: FETCH_MESSAGES,
        payload: snapshot.val()
      })
    })
  }
}

export function postMessage(message) {
  return dispatch => Messages.push(message)
  // return {
  //   type: 'POST_MESSAGE',
  //   payload: { [_uniqueId()]: message }
  // }
}
// const db = firebase.database().ref('messages')
//
// export function postMessage(params){
//   debugger
//   db.push(params)
// }

// export function fetchMessages(){
//   // firebase.initializeApp(config);
//   // let firebaseDB = firebase.database();
//   // let funSection = firebaseDB.ref("fun")

//   // const messages = funSection.on("value", function(events) {
//   //     let funEventList = events.val();
//   //     console.log(funEventList)
//   // })

//   // return {
//   //   type: 'FETCH_MESSAGES',
//   //   payload: messages
//   // }
// }
