import React from 'react';
import PropTypes from "prop-types";

const OptionRoom = ({ handleHiddenChat, handleShowChat, chat }) => {
    return (
        <div className="option-room">
            {
                (chat)
                    ? <button className="btn btn-secondary" onClick={handleHiddenChat}>Ocultar Chat</button>
                    : <button className="btn btn-primary" onClick={handleShowChat}>Mostrar Chat</button>
            }
            <button className="btn btn-primary">Ver lista de alumnos</button>
        </div>
    )
}

OptionRoom.propTypes = {
    handleHiddenChat: PropTypes.func.isRequired,
    handleShowChat: PropTypes.func.isRequired,
    chat: PropTypes.bool.isRequired
}

export default OptionRoom;
