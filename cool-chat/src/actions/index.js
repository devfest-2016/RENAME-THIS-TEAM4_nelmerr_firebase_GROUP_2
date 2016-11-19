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