import {fireBaseLink} from "../constants"

export function fetchMessages(){
  const messages = fetch(`${fireBaseLink}/messages`).then(response => {
    return response.json()
  }).then(messagesPayload => {
    return messagesPayload
  })

  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
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
