import React from 'react';
import { useLoginHook } from '../../hooks/loginHook';
import Loader from '../loader/Loader';
import './login.css';

const Login = () => {
    const {
        loader,
        form,
        handleChange,
        handleSubmit,
    } = useLoginHook()
    const { code, key } = form
    return (
        <>
            <div className="login">
                <div className="container">
                    
                    <h1 className="title">INICIAR SESION</h1>
                    {
                        (loader) && (
                    <div className="loading-login">
                        <Loader />
                    </div>
                        )
                    }
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="login-code">codigo</label>
                            <input type="text" className="form-control"
                                autoComplete='off'
                                pattern='[1-9]{1}[0-9]{5}'
                                minLength='6'
                                maxLength='6'
                                value={code}
                                name='code'
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label className="login-clave">clave</label>
                            <input type="password" className="form-control"
                                pattern='[1-9]{1}[0-9]{4}'
                                minLength='5'
                                maxLength='5'
                                value={key}
                                name='key'
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-btn">
                            <button type="submit" className="btn btn-outline-white">INGRESAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;