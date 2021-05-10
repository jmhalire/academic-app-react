import React, { useState } from 'react';
import Loader from '../../../components/loader/Loader';
import { fetchGet } from '../../../helpers/fetch';
import { useStateListSemester } from '../../../hooks/adminHooks/semesterHook/useListSemester';

import './notesStudent.css'

const NotesStudent = () => {

  const { listSemester } = useStateListSemester();
  const [idSemester, setIdSemester] = useState(0)
  const [notes, setNotes] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setIdSemester(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const res = await fetchGet(`/note/one/${idSemester}`);
    setNotes(res);
    setLoader(false);
  }

  return (
    <>
      <div className="card">
        <h2 className="title-constance-notes">CONSTANCIA DE NOTAS</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group selected-one-semester'>
            <label>Semestre</label>
            <select className="form-control" name='career' defaultValue='0' onChange={handleChange}>
              <option value='0' disabled>Seleccione una semestre</option>
              {
                listSemester.map((semester) => (
                  <option key={semester.id} value={semester.id}>{semester.code}</option>
                ))
              }
            </select>
            <button type="submit" className="btn btn-primary">BUSCAR</button>
          </div>
        </form>
        <div className="table-header">
          <table className="table">
            <thead >
              <tr>
                <th scope="col" style={{ width: "2%" }}>Nro</th>
                <th scope="col" style={{ width: "9%" }}>Codigo</th>
                <th scope="col" style={{ width: "40%" }}>Nombre</th>
                <th scope="col" style={{ width: "4%" }}>Cred.</th>
                <th scope="col" style={{ width: "5%" }}>Cat.</th>
                <th scope="col" style={{ width: "6%" }}>P1</th>
                <th scope="col" style={{ width: "6%" }}>P2</th>
                <th scope="col" style={{ width: "6%" }}>P3</th>
                <th scope="col" style={{ width: "6%" }}>Sust.</th>
                <th scope="col" style={{ width: "5%" }}>Prom.</th>
                <th scope="col" style={{ width: "11%" }}>Observacion</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-body">
          {
            (loader)
              ? (<Loader />)
              : (
                <table className="table teacher-course-table">
                  <tbody>
                    {
                      (notes.map((item, index) => {
                        return (
                          <tr key={item.courseId}>
                            <th scope="row" style={{ width: "2%" }}>{index + 1}</th>
                            <td style={{ width: "9%" }}>{item.code}</td>
                            <td style={{ width: "40%" }}>{item.name}</td>
                            <td style={{ width: "4%" }}>{item.credit}</td>
                            <td style={{ width: "5%" }}>{item.category}</td>
                            <td style={{ width: "6%" }}>{item.firstAverage}</td>
                            <td style={{ width: "6%" }}>{item.secondAverage}</td>
                            <td style={{ width: "6%" }}>{item.thirdAverage}</td>
                            <td style={{ width: "6%" }}>{item.substitute}</td>
                            <td style={{ width: "5%" }}>{item.average}</td>
                            <td style={{ width: "11%" }}>{item.observation}</td>
                          </tr>
                        )
                      }))
                    }
                  </tbody>
                </table>
              )
          }
        </div>
      </div>
      <br />
      <div className="card">
        <h2 className="title-constance-notes">CONSTANCIA DE MATRICULA</h2>
        <div className="table-header">
          <table className="table">
            <thead >
              <tr>
                <th scope="col" style={{ width: "2%" }}>Nro</th>
                <th scope="col" style={{ width: "9%" }}>Codigo</th>
                <th scope="col" style={{ width: "40%" }}>Nombre</th>
                <th scope="col" style={{ width: "4%" }}>Cred.</th>
                <th scope="col" style={{ width: "5%" }}>Cat.</th>
                <th scope="col" style={{ width: "6%" }}>P1</th>
                <th scope="col" style={{ width: "6%" }}>P2</th>
                <th scope="col" style={{ width: "6%" }}>P3</th>
                <th scope="col" style={{ width: "6%" }}>Sust.</th>
                <th scope="col" style={{ width: "5%" }}>Prom.</th>
                <th scope="col" style={{ width: "11%" }}>Observacion</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="table-body">
          {
            (loader)
              ? (<Loader />)
              : (
                <table className="table teacher-course-table">
                  <tbody>
                    {
                      (notes.map((item, index) => {
                        return (
                          <tr key={item.courseId}>
                            <th scope="row" style={{ width: "2%" }}>{index + 1}</th>
                            <td style={{ width: "9%" }}>{item.code}</td>
                            <td style={{ width: "40%" }}>{item.name}</td>
                            <td style={{ width: "4%" }}>{item.credit}</td>
                            <td style={{ width: "5%" }}>{item.category}</td>
                            <td style={{ width: "6%" }}>{item.firstAverage}</td>
                            <td style={{ width: "6%" }}>{item.secondAverage}</td>
                            <td style={{ width: "6%" }}>{item.thirdAverage}</td>
                            <td style={{ width: "6%" }}>{item.substitute}</td>
                            <td style={{ width: "5%" }}>{item.average}</td>
                            <td style={{ width: "11%" }}>{item.observation}</td>
                          </tr>
                        )
                      }))
                    }
                  </tbody>
                </table>
              )
          }
        </div>
      </div>
    </>
  )
}

export default NotesStudent
