import React from 'react';
import PropTypes from "prop-types";

import NotifyRoom from '../NotifyRoom';
import { useStateOnSocketStreaming } from '../../../hooks/chatHooks/useOnSocketStreaming';

import './streaming.css';

const Streaming = ({ setShowHiddenRoom }) => {

  const {
    user,
    listUserRoom,
    chatNotify,
    emitVideo,
    emitAudio,
    deleteNotify,
    streamingAudio,
    streamingVideo
  } = useStateOnSocketStreaming();


  return (
    <>
      <div className="list-chat-notify" >
        {
          chatNotify.map((item) => {
            const { id, notify } = item;
            return <NotifyRoom key={id} message={notify} deleteNotify={deleteNotify} />
          })
        }
      </div>
      <div className="one-member">
        <div className="card">
          <span className="name-user">{user.firstName} {user.lastName} {user.name}</span>
          <div className="video-streaming">
            {/* <i class="fas fa-home" aria-hidden="true" style="margin-right: 10px;"></i> */}
            <video id={user.code} src='' autoPlay={true} style={{ width: '100%', height: '100%' }}></video>
            <canvas id={`${user.code}${user.roles}`} className="canvas" width={'640'} height={'480'}></canvas>
          </div>
        </div>
      </div>
      {
        listUserRoom.map((item) => {
          const { firstNameUser, lastNameUser, nameUser, codeUser } = item;
          return (
            <div className="one-member" key={codeUser}>
              <div className="card">
                <span className="name-user">{firstNameUser} {lastNameUser} {nameUser}</span>
                <div className="video-streaming">
                  <img id={codeUser} src='' alt='' style={{ width: '100%' }}></img>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="constrols">
        <div className="controls-container">
          <div className="control video" onClick={streamingVideo}>
            {
              (emitVideo)
                ? <i className="fas fa-video"></i>
                : <i className="fas fa-video-slash"></i>
            }
          </div>
          <div className="end-call control" onClick={() => { setShowHiddenRoom(false) }}>
            <i className="fas fa-phone-square" ></i>
          </div>
          <div className="control audio" onClick={streamingAudio}>
            {
              (emitAudio)
                ? <i className="fas fa-microphone"></i>
                : <i className="fas fa-microphone-slash"></i>
            }
          </div>
        </div>
      </div>
    </>
  )
}

Streaming.propTypes = {
  setShowHiddenRoom: PropTypes.func.isRequired
}

export default Streaming;

/*
<i className="fas fa-microphone"></i>
<i className="fas fa-microphone-slash"></i>
<i className="fas fa-video"></i>
<i className="fas fa-video-slash"></i>
<i className="fas fa-chalkboard-teacher"></i>
<i className="fal fa-users-class"></i>
<i className="far fa-user"></i>
<i className="fas fa-laptop-house"></i>
<i className="far fa-sticky-note"></i>
<i className="fas fa-book-reader"></i>
*/
