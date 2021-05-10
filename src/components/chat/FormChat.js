import React from 'react';
import { useStateEmitSocket } from '../../hooks/chatHooks/useEmitSocket';

import './chat.css'

const FormChat = () => {


    const {
        formMessage,
        user,
        stateChat,
        handleFormMessageChange,
        handleEmitMessage,
        handleActiveChat,
        handleDeactiveChat,
        handleBlur
    } = useStateEmitSocket()
    return (
        <div className="chat-form-user">
            {
                (stateChat)
                    ? (
                        <form onSubmit={handleEmitMessage}>
                            <input 
                                type='text' 
                                className="form-control" 
                                name='message' 
                                value={formMessage} 
                                onChange={handleFormMessageChange} 
                                onBlur={handleBlur}
                                autoComplete='off'
                            />
                            <div className="btns-chat">
            
                                <button type='submit' className="btn btn-primary" >Enviar <i className="fas fa-paper-plane"></i></button>
                                {
                                    (user.roles === 'TEACHER') &&
                                    <button type='button' className="btn btn-outline-primary" onClick={handleDeactiveChat}>desactivar chat</button>
                                }
                            </div>
                        </form>
                    )
                    : (
                        <div className="element-state-chat">
                            <span>El chat esta desactivado.</span>
                            {
                                (user.roles === 'TEACHER') &&
                                <button type='button' className="btn btn-primary" onClick={handleActiveChat}>ACTIVAR CHAT</button>
                            }
                            {
                                (user.roles === 'STUDENT') &&
                                <span>Solicita a tu docente que active el CHAT</span>
                            }
                        </div>
                    )
            }
        </div>
    )
}

export default FormChat;
