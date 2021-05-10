import React from 'react';
import OptionRoom from './OptionRoom';
import Streaming from './straming/Streaming';
import Chat from '../chat/Chat';
import { useStateRoom } from '../../hooks/chatHooks/useRoomHook';
import PropTypes from "prop-types";

import './room.css';
import { SocketContext } from '../../context';

const Room = ({ setShowHiddenRoom }) => {

    const {
        socket,
        otherRef,
        chatRef,
        chat,
        handleHiddenChat,
        handleShowChat,
    } = useStateRoom()

    return (
        <SocketContext.Provider value={{ socket }}>
            <div className="sala-virtual">
                <OptionRoom
                    handleHiddenChat={handleHiddenChat}
                    handleShowChat={handleShowChat}
                    chat={chat}
                />
                <div className="body-room">
                    {
                        (socket) &&
                        (
                            <>
                                <div className="chat-content hidden-chat" ref={chatRef}>
                                    {
                                        (chat) && <Chat />

                                    }
                                </div>
                                <div className="members-content show-members" ref={otherRef}>
                                    <Streaming setShowHiddenRoom={setShowHiddenRoom} />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </SocketContext.Provider>
    )
}

Room.propTypes = {
    setShowHiddenRoom: PropTypes.func.isRequired
}

export default Room;
