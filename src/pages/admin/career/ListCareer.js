import React from 'react';
import { useStateListCareer } from '../../../hooks/adminHooks/careerHook/useListCareer';

const ListCareer = () => {
    const {
        listCareer
    } = useStateListCareer();
    return (
        <div className="card card-list">
            <h2 className="title-career">Lista de Todas las Carreras</h2>
            <div className="table-header-admin">
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col" style={{ width: "5%" }}>Nro</th>
                            <th scope="col" style={{ width: "10%" }}>Codigo</th>
                            <th scope="col" style={{ width: "70%" }}>Nombre</th>
                            <th scope="col" style={{ width: "15%" }}>Nro Alumnos</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="t-body-admin">
                <table className="table">
                    <tbody>
                        {
                            listCareer.map((career, index) => {
                                return (
                                    <tr key={career.id}>
                                        <th style={{ width: "5%" }} scope="row">{index + 1}</th>
                                        <td style={{ width: "10%" }} >{career.code}</td>
                                        <td style={{ width: "70%" }} >{career.name}</td>
                                        <td style={{ width: "15%" }} >4</td>
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


export default ListCareer
