/**
 * Created by macbook on 3/10/18.
 */
import { connect } from 'react-redux'
import { sendMessage } from './../actions'
import Message from '../components/Message/Message'

const mapStateToProps = (state, ownProps) => {
    return {
        messageText: state.messageReducer.messageText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSend: (text) => dispatch(sendMessage(text))
    }
}

const MessageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Message)

export default MessageContainer
