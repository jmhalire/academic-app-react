import React from 'react';
import PropTypes from 'prop-types'
import "./SelectedCourse.css"
import { useSelectedCourse } from '../../../../../hooks/studentHooks/selectedCourseHook';

const SelectdCourse = ({afterRegister,registerCourse,removeCourse} ) => {


    const {
        Cred,
        handleSubmit
    } = useSelectedCourse({afterRegister,registerCourse});

    return (
        <div className="card card-course-selected mt-2">
            <div className="header-course-select">
                <h5 className="text-white">list of courses selected for his register in semester 2020-2</h5>
                <h5 className="ml-auto text-white">Nro credits : <strong className="nro-credits">{Cred}</strong></h5>
            </div>
            <table className="table table-bordered">
                <thead className="card-header">
                    <tr>
                        <th scope="col" style={{ width: "10%" }}>Election</th>
                        <th scope="col" style={{ width: "10%" }}>Code</th>
                        <th scope="col" style={{ width: "50%" }}>Name</th>
                        <th scope="col" style={{ width: "5%" }}>Credits</th>
                        <th scope="col" style={{ width: "5%" }}>Category</th>
                        <th scope="col" style={{ width: "10%" }}>#student</th>
                        <th scope="col" style={{ width: "10%" }}>limit</th>
                    </tr>
                </thead>
                <tbody className="card-body">
                    {
                        registerCourse.map((item) => {
                            return (
                                <tr key={item.code}>
                                    <td className="d-flex justify-content-center p-1">
                                        <button className="btn btn-danger"
                                            onClick={() => {removeCourse(item)}}
                                        >
                                            X
                                        </button>
                                    </td>
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
            <div className="card-footer d-flex">
                <button type="button" className="btn btn-cyan mx-auto mt-2 btn-next-course-offered"
                    data-toggle="modal" data-target="#confirmRegister"
                >
                    save
                </button>
            </div>
            <div className="modal fade" id="confirmRegister" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-confirm-register">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">you has selected this courses for hisregister</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-bordered">
                                <thead className="card-header">
                                    <tr>
                                        <th scope="col" style={{ width: "5%" }}>Nro</th>
                                        <th scope="col" style={{ width: "10%" }}>Code</th>
                                        <th scope="col" style={{ width: "65%" }}>Name</th>
                                        <th scope="col" style={{ width: "10%" }}>Credits</th>
                                        <th scope="col" style={{ width: "10%" }}>Category</th>
                                    </tr>
                                </thead>
                                <tbody className="card-body">
                                    {
                                        registerCourse.map((item, index) => {
                                            return (
                                                <tr key={item.code}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.code}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.credit}</td>
                                                    <td>{item.category}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="d-flex">
                                <h5 className="ml-auto">TOTAL CREDITS: <strong> {Cred}/22</strong></h5>
                            </div>
                        </div>
                        <div className="modal-footer footer-selectCourse">
                            <button type="button" className="btn btn-brown" onClick={handleSubmit} data-dismiss="modal">CONFIRM REGISTER</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectdCourse;

SelectdCourse.prototype = {
    afterRegister: PropTypes.func.isRequired,
    registerCourse: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired
}