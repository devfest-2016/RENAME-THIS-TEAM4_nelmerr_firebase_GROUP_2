import React from 'react'
import ChatForm from './chatform'
import Emoji from './emoji'
import {connect, componentCreator} from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'

const {isLoaded, isEmpty, dataToJS } = helpers

firebase([
  'fun'
])

connect(
  ({firebase}) => ({
    fun: dataToJS(firebase, 'fun'),
  })
)

class ChatRoom extends React.Component {
  render() {
    const {firebase, fun} = this.props;

    const firebaseMessages = fun

    return(
      <div className="chatDisplay">
        {this.props.firebaseMessages}
      </div>
    )

  }
}




// function ChatRoom () {



//     return (
//         <div>
//           <h1>CHATROOM</h1>

//           <div className="chatDisplay">
//             {this.props.messages}
//           </div>

//           <ChatForm />

//           <Emoji />

//         </div>
//     )
// }

// function mapStateToProps(state, ownProps) {
//     return {
//         messages: state.messages
//     }
// }

// const componentCreator = connect( mapStateToProps )

// export default componentCreator( ChatRoom )

export default ChatRoom
