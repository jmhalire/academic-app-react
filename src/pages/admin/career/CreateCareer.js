import React from 'react';
import { useStateCreateCareer } from '../../../hooks/adminHooks/careerHook/useCreateCareer';

//styles
import './career.css';

const CreateCareer = () => {

    const {
        formCareer,
        handleChange,
        handleSubmit
    } = useStateCreateCareer();

    const { code, name } = formCareer;
    return (
        <div className="card create-career">
            <h2 className="title-career">Crear Nueva Carrera</h2>
            <form className="form-career" onSubmit={handleSubmit}>
                <div className="form-group code">
                    <label className="label">Code</label>
                    <input
                        className="form-control"
                        name='code'
                        value={code}
                        onChange={handleChange}
                        pattern='[A-Z]'
                        minLength='2'
                        maxLength='4'
                        autoComplete='off'
                    />
                </div>
                <div className="form-group name">
                    <label className="label">Name</label>
                    <input
                        className="form-control"
                        name='name'
                        value={name}
                        onChange={handleChange}
                        pattern='[A-Z]'
                        minLength='2'
                        autoComplete='off'
                    />
                </div>
                <div className="button">
                    <button type="submit" className="btn btn-primary">GUARDAR</button>
                </div>

            </form>
        </div>
    )
}


export default CreateCareer
