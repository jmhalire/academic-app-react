import React, { useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './chatTeacher.css';
import { useStateGetDataChat } from '../../../../../hooks/useGetDataChat';

const ChatTeacher = ({ course, teacher }) => {

  const { chatId } = course;
  const { chatData } = useStateGetDataChat(chatId);

  const refMessageChat = useRef();

  useLayoutEffect(() => {
    setTimeout(() => {
      const { current: element } = refMessageChat;
      if(element){
        element.scrollTop = element.scrollHeight - element.offsetHeight;
      }
    }, 300);
  }, [])

  return (
    <div className="messages-chat" ref={refMessageChat}>
      {
        chatData.map((data) => {
          const {
            codeUser,
            createdAt,
            firstNameUser,
            lastNameUser,
            message,
            nameUser,
            role
          } = data;
          return (
            (codeUser === teacher.code)
              ? (
                <div key={createdAt} className="card-message card-message-right">
                  <div className="message-header">
                    <strong className="name-user">TU</strong>
                    <span className="role">-{role}</span>
                  </div>
                  <div className="message-body p-1">
                    <span>{message}</span>
                  </div>
                  <div className="message-footer">
                    <span className="date">{new Date(createdAt).toLocaleString()}</span>
                  </div>
                </div>
              )
              : (
                <div key={createdAt} className="card-message card-message-left">
                  <div className="message-header">
                    <strong className="name-user">{firstNameUser} {lastNameUser} {nameUser}</strong>
                    <span className="role">-{role}</span>
                  </div>
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
    </div>
  )
}

ChatTeacher.propTypes = {
  teacher: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired
}

export default ChatTeacher;
