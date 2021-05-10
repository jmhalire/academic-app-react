import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import "./ProofRegistration.css"

export default function ProofRegistration(props) {

    const [Cred, setCred] = useState(0);

    useEffect(() => {
        let cred = 0;
        props.registerCourse.forEach(element => {
            cred += element.credit
        });
        setCred(cred)
    }, [props.registerCourse])

    const { registerCourse } = props

    return (
        <div className="card card-course-selected mt-2">
            <div className="header-course-select">
                <h5 className="text-white">list of courses selected for his register in semester 2020-2</h5>
                <h5 className="ml-auto text-white">Nro credits : <strong className="nro-credits">{Cred}</strong></h5>
            </div>
            <table className="/current-semestertable table-bordered">
                <thead className="card-header">
                    <tr>
                        <th scope="col" style={{ width: "20%" }}>Code</th>
                        <th scope="col" style={{ width: "60%" }}>Name</th>
                        <th scope="col" style={{ width: "10%" }}>Credits</th>
                        <th scope="col" style={{ width: "10%" }}>Category</th>
                    </tr>
                </thead>
                <tbody className="card-body">
                    {
                        registerCourse.map((item) => {
                            return (
                                <tr key={item.code}>
                                    <td>{item.code}</td>
                                    <td>{item.name}</td>
                                    <td>{item.credit}</td>
                                    <td>{item.category}</td>
                                    <td>{item.nrostudent}</td>
                                    <td>{item.limit}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

ProofRegistration.propTypes = {
    registerCourse: PropTypes.array.isRequired
}
