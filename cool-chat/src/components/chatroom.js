import React from 'react'
import ChatForm from './chatform'
import Emoji from './emoji'

import {connect} from 'react-redux'


function ChatRoom () { 
    return (
        <div>
            
            <ChatForm />
            <Emoji />
        </div>
    )
}

function mapStateToProps(state, ownProps) {
    return {
        messages: state.messages
    }
}

const componentCreator = connect( mapStateToProps )

export default componentCreator( ChatRoom )