import React, { useEffect } from "react";
import PropTypes from "prop-types";

import './chat.css'

const ChatNotify = ({ message, deleteNotify }) => {

    useEffect(() => {
        setTimeout(() => {
            deleteNotify()
        }, 10000);
    }, [])

    return (
        <span className="chat-notify">{message}</span>
    )
}

ChatNotify.propTypes = {
    message: PropTypes.string.isRequired,
    deleteNotify: PropTypes.func.isRequired
}

export default ChatNotify;