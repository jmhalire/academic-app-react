import React, { useEffect } from "react";
import PropTypes from "prop-types";


const NotifyRoom = ({ message, deleteNotify }) => {

    useEffect(() => {
        setTimeout(() => {
            deleteNotify()
        }, 10000);
    }, [deleteNotify])

    return (
        <span className="chat-notify">{message}</span>
    )
}

NotifyRoom.propTypes = {
    message: PropTypes.string.isRequired,
    deleteNotify: PropTypes.func.isRequired
}

export default NotifyRoom;