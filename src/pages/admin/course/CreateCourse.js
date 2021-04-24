import React from 'react';
import PropTypes from 'prop-types';
import { useStateCreateCourse } from '../../../hooks/adminHooks/courseHook/useCreateCourse';

const CreateCourse = ({ listCareer }) => {
  const {
    formCourse,
    createCareer,
    selectCareer,
    setCreateCareer,
    handleChange,
    handleSubmit,
    cleanForm
  } = useStateCreateCourse();

  const { code, name, category, credit } = formCourse

  return (
    <div className="card create-course">
      <h2 className="btn-create-career" onClick={() => { setCreateCareer(!createCareer) }}>Crear Nuevo Curso</h2>
      <form onSubmit={handleSubmit}>
        {
          (createCareer) &&
          <>
            <div className="form-group select-career">
              <label className="label">Carrera</label>
              <select className="form-control" required name='career' defaultValue='0' onChange={handleChange}>
                <option value='0' disabled>Seleccione una Carrera</option>
                {
                  listCareer.map((career) => (
                    <option key={career.id} value={career.id}>{career.name}</option>
                  ))
                }
              </select>
            </div>
            {(selectCareer) && (
              <>
                <div className="info-course">
                  <div className="category-credits">
                    <div className="form-group code">
                      <label className="label">Codigo</label>
                      <input
                        className="form-control"
                        name='code'
                        value={code}
                        onChange={handleChange}
                        pattern='[A-Z]'
                        minLength='2'
                        autoComplete='off'
                      />
                    </div>
                    <div className="form-group category">
                      <label className="label">Categoria</label>
                      <select className="form-control" name='category' defaultValue={category} onChange={handleChange}>
                        <option value='' disabled>Elija una categoria</option>
                        <option value='OE'>OE</option>
                        <option value='AC'>AC</option>
                        <option value='SEM'>SEM</option>
                        <option value='OCG'>OCG</option>
                        <option value='EE'>EE</option>
                      </select>
                    </div>
                    <div className="form-group credits">
                      <label className="label">Creditos</label>
                      <select className="form-control" name='credit' defaultValue={credit} onChange={handleChange}>
                        <option value='' disabled>Elija el credito</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                    </div>

                  </div>
                  <div className="name">
                    <div className="form-group">
                      <label className="label">Nombre</label>
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
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="btn btn-primary">GUARDAR</button>
                  <button type="reset" className="btn btn-tertiary" onClick={cleanForm}>LIMPIAR</button>
                </div>
              </>)
            }
          </>
        }
      </form>
    </div>
  )
}

CreateCourse.propTypes = {
  listCareer: PropTypes.array.isRequired
}

export default CreateCourse
