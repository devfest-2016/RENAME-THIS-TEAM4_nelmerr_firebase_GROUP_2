// import {fireBaseLink} from "../constants"
// import {firebase, helpers} from 'redux-react-firebase'
// import {config} from '../reducers'

const db = firebase.database().ref('fun')

export function postMessage(params){
  db.push(params)
}


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
