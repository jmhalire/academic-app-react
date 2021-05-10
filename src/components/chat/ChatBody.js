import React from 'react';
import { useStateOnSocketChat } from '../../hooks/chatHooks/useOnSocketChat';

import './chat.css';

const ChatBody = () => {

  /* use chat */
  const {
    refMessageChat,
    user,
    typing,
    listMessages,
  } = useStateOnSocketChat();


  let nameAux = '';
  return (
    <>
      <div className="messages-chat" ref={refMessageChat}>
        {
          listMessages.map((data, index) => {
            let nameAntes = nameAux;
            const {
              codeUser,
              createdAt,
              firstNameUser,
              lastNameUser,
              message,
              nameUser,
              role
            } = data;
            nameAux = nameUser;
            return (
              (codeUser === user.code)
                ? (
                  <div key={index} className="card-message card-message-right">
                    {
                      (nameAntes !== nameUser) &&
                      (
                        <div className="message-header">
                          <strong className="name-user">TU</strong>
                          <span className="role">-{role}</span>
                        </div>
                      )
                    }
                    <div className="message-body p-1">
                      <span>{message}</span>
                    </div>
                    <div className="message-footer">
                      <span className="date">{new Date(createdAt).toLocaleString()}</span>
                    </div>
                  </div>
                )
                : (
                  <div key={index} className="card-message card-message-left">
                    {

                      (nameAntes !== nameUser) &&
                      (
                        <div className="message-header">
                          <strong className="name-user">{firstNameUser} {lastNameUser} {nameUser}</strong>
                          <span className="role">-{role}</span>
                        </div>
                      )
                    }
                    <div className="message-body p-1">
                      <span>{message}</span>
                    </div>
                    <div className="message-footer">
                      <span className="date">{new Date(createdAt).toLocaleString()}</span>
                    </div>
                  </div>
                )
            )
          })
        }
        {
          (typing.state) && <span className="typing-user">{typing.value}</span>
        }
      </div>
    </>
  )
}

export default ChatBody;
