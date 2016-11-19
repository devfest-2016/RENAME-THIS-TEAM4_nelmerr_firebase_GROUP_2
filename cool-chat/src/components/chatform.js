import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Button} from 'react-bootstrap'

class ChatForm extends React.Component {

    constructor (props) {
        super(props)
        this.handleMessageChange = this.handleMessageChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.state = {
            message: ""
        }
    }

    handleMessageChange (event) {
        this.setState({message: event.target.value})
    }

    sendMessage () {
      
    // instead of doing a post request directly here, we must dispatch a post action and handle our action to make the post request for us

    //    const url = messageBaseLink + "/text"
    //    fetch(url, {
    //         method: 'post',
    //         headers: {
    //         "Content-type": "application/json",
    //         "Accepts": "application/json"
    //         },
    //         body: JSON.stringify({name: this.state.name, message: this.state.message, phone: this.state.phone})
    //     })
    }

    render () {
        return (
          <div>
            <h1>CHATFORM</h1>
            <form>
                <textarea type="text" onChange={this.handleMessageChange} />
                <Button onClick={ () => this.sendMessage() }>
                    Send
                </Button>
            </form>
          </div>
        )
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapDispatchToProps)

 export default componentCreator(ChatForm)
