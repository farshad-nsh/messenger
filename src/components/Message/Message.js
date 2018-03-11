/**
 * Created by macbook on 3/10/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import "./message.scss"

//const Message = ({ onSend, messageText }) => {
 class Message extends React.Component {

     handleSubmit(event) {
         let input = this.refs.input;
         event.preventDefault();
         if (!input.value.trim()) {
             return
         }
         this.props.onSend(input.value);
         input.value = ''
     }

     render() {
         return (
            <div className="messageBox">
            <div>
                {this.props.messageText}
            </div>
                 <form onSubmit={this.handleSubmit.bind(this)}>
                     <input ref="input" />
                     <button type="submit">
                         send
                     </button>
                 </form>
             </div>
         )
     }
 }

Message.propTypes = {
    onSend: PropTypes.func.isRequired,
    // messageText: PropTypes.string.isRequired
}


export default Message
