import React from 'react'
import { useStateListSemester } from '../../../hooks/adminHooks/semesterHook/useListSemester'
import './semester.css'

const ListSemester = () => {

  const {
    listSemester,
    registerActive
  } = useStateListSemester();

  return (
    <div className="card card-list">
      <div className="table-header-admin">
        <table className="table">
          <thead >
            <tr>
              <th scope="col" style={{ width: '5%' }} >Nro</th>
              <th scope="col" style={{ width: '19%' }} >Semestre</th>
              <th scope="col" style={{ width: '19%' }} >Inicio</th>
              <th scope="col" style={{ width: '19%' }} >Finalizacion</th>
              <th scope="col" style={{ width: '19%' }} >Estado</th>
              <th scope="col" style={{ width: '19%' }} >Opcion</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="t-body-admin">
        <table className="table">
          <tbody>
          {
              listSemester.map((semester, index) => {
                return (
                  <tr key={semester.id}>
                    <th scope="row" style={{ width: '5%' }}>{index + 1}</th>
                    <td style={{ width: '19%' }}>{semester.code}</td>
                    <td style={{ width: '19%' }}>{semester.fromDate}</td>
                    <td style={{ width: '19%' }}>{semester.toDate}</td>
                    {
                      semester.state === "ACTIVATED" && (
                        <>
                          <td style={{ color: 'green', width: '19%' }}>{semester.state}</td>
                          {
                            registerActive
                              ? (
                                <td style={{ width: '19%' }}>
                                  <button className="btn btn-outline-primary btn-option" onClick={()=>{}}>disable register</button>
                                </td>
                              )
                              : <td style={{ width: '19%' }}>
                                <button className="btn btn-outline-primary btn-option" data-toggle="modal" data-target="#activeRegisterModal">enable register</button>
                              </td>
                          }
                        </>
                      )
                    }
                    {
                      semester.state !== "ACTIVATED" && (
                        <td style={{ color: 'red', width: '19%' }}>{semester.state}</td>
                      )
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListSemester
