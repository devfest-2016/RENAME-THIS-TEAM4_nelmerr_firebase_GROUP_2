import {fireBaseLink} from "../constants"
import {firebase, helpers} from 'redux-react-firebase'

export function fetchMessages(){
  // // const messages = fetch(`${fireBaseLink}/messages`).then(response => {
  // //   return response.json()
  // // }).then(messagesPayload => {
  // //   return messagesPayload
  // // })
  //     // firebase.initializeApp(config);
  //     // firebaseDB = firebase.database();
  //     // funSection = firebaseDB.ref("fun")
  //     // funSection.on("value", function(events) {
  //     //   funEventList = events.val();
  //     //   console.log(funEventList)
  //     // })

  // return {
  //   type: 'FETCH_MESSAGES',
  //   payload: messages
  // }
}

export function postMessage(params){
  const newMessage = fetch(`${fireBaseLink}/messages`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  return {
    type: 'POST_MESSAGE',
    payload: newMessage
  }
}
