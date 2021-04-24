import React from 'react'
import PropTypes from 'prop-types'
import { useStateSearchCourse } from '../../../hooks/adminHooks/courseHook/useSearchCourse'

const SearchCourse = ({ listCareer, setSelectCareer }) => {

  const {
    handleChange,
    handleSubmit
  } = useStateSearchCourse({ listCareer, setSelectCareer });

  return (
    <div className="search">
      <h2 className="title-list-career">Lista de cursos por carrera</h2>
      <form className="form-course-search" onSubmit={handleSubmit}>
        <div className="form-group career">
          <label className="label">Carrera Profesional</label>
          <select className="form-control" name='career' defaultValue='0' onChange={handleChange}>
            <option value='0' disabled>Seleccione una Carrera</option>
            {
              listCareer.map((career) => (
                <option key={career.id} value={career.id}>{career.name}</option>
              ))
            }
          </select>
        </div>
        <div className="button">
          <button type="submit" className="btn btn-primary">BUSCAR</button>
        </div>
      </form>
    </div>
  )
}

SearchCourse.propTypes = {
  listCareer: PropTypes.array.isRequired
}

export default SearchCourse
