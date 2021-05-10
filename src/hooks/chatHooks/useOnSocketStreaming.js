import { useContext, useEffect, useReducer, useState } from "react";
import { CourseContext, SocketContext } from "../../context";
import { chatNotifyReducer, listUserRoomReducer } from "../../reducer";
import { typesSocket } from "../../types/types";


export const useStateOnSocketStreaming = () => {

    const { user, course } = useContext(CourseContext);
    const { socket } = useContext(SocketContext);
    const [listUserRoom, dispatchListUserRoom] = useReducer(listUserRoomReducer, [])
    const [chatNotify, dispatchNotify] = useReducer(chatNotifyReducer, []);
    const [emitVideo, setEmitVideo] = useState(false)
    const [emitAudio, setEmitAudio] = useState(false)


    let videoStreaming;
    //let audioStreaming;

    useEffect(() => {
        const { code, name, firstName, lastName, roles } = user;
        const { category, code: codeCourse } = course;
        let data = {
            typeChat: 'joinSala',
            codeUser: code,
            nameUser: name,
            firstNameUser: firstName,
            lastNameUser: lastName,
            codeCourse: codeCourse,
            categoryCourse: category,
            role: roles,
            message: 'unirme al chat'
        }

        socket.emit(typesSocket.clientMessage, data);

        socket.on(typesSocket.serverMessage, (chat) => {
            const { typeChat } = chat;
            switch (typeChat) {
                case typesSocket.conected:
                    dispatchNotify({
                        type: 'add',
                        payload: { id: new Date().getMilliseconds(), notify: chat.message }
                    })
                    const { codeUser } = chat;
                    if (codeUser !== code) {
                        let data = {
                            typeChat: typesSocket.conectedList,
                            idClient: chat.idClient,
                            codeUser: code,
                            nameUser: name,
                            firstNameUser: firstName,
                            lastNameUser: lastName,
                            role: roles,
                        }
                        socket.emit(typesSocket.clientMessage, data);
                        dispatchListUserRoom({
                            type: 'add',
                            payload: {
                                codeUser: chat.codeUser,
                                firstNameUser: chat.firstNameUser,
                                lastNameUser: chat.lastNameUser,
                                nameUser: chat.nameUser,
                                role: chat.role
                            }
                        })
                    }
                    break;
                case typesSocket.leave:
                    dispatchNotify({
                        type: 'add',
                        payload: { id: new Date().getMilliseconds(), notify: chat.message }
                    })
                    dispatchListUserRoom({
                        type: 'remove',
                        payload: { codeUser: chat.codeUser }
                    })
                    break;
                case typesSocket.conectedList:

                    dispatchListUserRoom({
                        type: 'add',
                        payload: {
                            codeUser: chat.codeUser,
                            firstNameUser: chat.firstNameUser,
                            lastNameUser: chat.lastNameUser,
                            nameUser: chat.nameUser,
                            role: chat.role
                        }
                    })
                    break;

                case typesSocket.video:
                    const img = document.getElementById(`${chat.codeUser}`);
                    if (img) img.src = chat.message;
                    break;
                default:
                    break;
            }
        });

        socket.on('disconnect', () => {
            console.warn('WS: Disconnected!', socket);
        });

        socket.on('authorized', (authorized) => {
            //console.log(authorized);
        });

        socket.on('error', (error) => {
            console.log(error);
        });

        socket.on('unauthorized', (unauthorized) => {
            console.log(unauthorized);
        });

        return () => {

            let data = {
                typeChat: typesSocket.leave,
                codeUser: code,
                nameUser: name,
                firstNameUser: firstName,
                lastNameUser: lastName,
                room: `${codeCourse}${category}`
            }
            socket.emit(typesSocket.clientMessage, data);
            socket.disconnect();
        };
    }, [course, socket, user])


    const deleteNotify = () => {
        dispatchNotify({
            type: 'remove',
            payload: '0'
        })
    }

    const streamingVideo = () => {

        if (emitVideo) {
            stopStreamingVideo();
        } else {
            startStreamingVideo();
        }
    }

    const streamingAudio = () => {
        if (emitAudio) {
            stopStreamingAudio();
        } else {
            startStreamingAudio();
        }
    }

    const startStreamingVideo = () => {
        const canvas = document.getElementById(`${user.code}${user.roles}`);
        const context = canvas.getContext('2d');
        const video = document.getElementById(`${user.code}`);
        canvas.style.display = 'none'

        const data = {
            typeChat: typesSocket.video,
            codeUser: user.code,
            nameUser: user.name,
            firstNameUser: user.firstName,
            lastNameUser: user.lastName,
            role: user.roles,
            room: `${course.code}${course.category}`
        }

        // navigator.getUserMedia = (
        //     navigator.getUserMedia ||
        //     navigator.webkitGetUserMedia ||
        //     navigator.mozGetUserMedia ||
        //     navigator.msGetUserMedia
        // );

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || function(){alert('Su navegador no soporta navigator.getUserMedia().');};

        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                { video: true },
                (stream) => {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                },
                (error) => {
                    console.log('error');
                })
        }

        videoStreaming = setInterval(() => {
            context.drawImage(video, 0, 0);
            socket.emit(typesSocket.clientMessage, { ...data, message: canvas.toDataURL('image/webp') })
        }, 100);

        setEmitVideo(true);

    }

    const stopStreamingVideo = () => {
        clearInterval(videoStreaming);
        const video = document.getElementById(`${user.code}`);
        video.srcObject = null;
        setEmitVideo(false)
    }

    const startStreamingAudio = () => {
        setEmitAudio(true)
    }

    const stopStreamingAudio = () => {
        setEmitAudio(false)
    }

    return {
        user,
        listUserRoom,
        chatNotify,
        emitVideo,
        emitAudio,
        deleteNotify,
        streamingAudio,
        streamingVideo
    }

}