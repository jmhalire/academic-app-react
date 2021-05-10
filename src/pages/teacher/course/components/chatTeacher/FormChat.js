import React from 'react';

const FormChatTeacher = () => {
    return (
        <div className="form-chat-teacher">
            <form >
                <input type='text' className="form-control" />
                <div className="btns-chat">
                    <button type='button' className="btn btn-primary">enviar</button>
                    <button type='button' className="btn btn-outline-primary">desactivar chat</button>
                </div>
            </form>
        </div>
    )
}

export default FormChatTeacher;
