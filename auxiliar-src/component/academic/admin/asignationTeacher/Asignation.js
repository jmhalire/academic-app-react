import React from 'react'
import { useAsignationTeacher } from "../../../../hooks/adminHooks/asignationHook";
import "./Asignation.css";

const Asignation = () => {

    const {
        ListCourse,
        ListTeacher,
        SelectCourse,
        setSelectCourse,
        handleChange,
        handleSubmit
    } = useAsignationTeacher();

    const { course } = SelectCourse;

    return (
        <>
            <div className="card card-course-admin">
                <table className="table table-bordered">
                    <thead className="card-header">
                        <tr>
                            <th scope="col" style={{ width: "5%" }}>Nro</th>
                            <th scope="col" style={{ width: "7%" }}>Code</th>
                            <th scope="col" style={{ width: "30%" }}>Name</th>
                            <th scope="col" style={{ width: "5%" }}>Credit</th>
                            <th scope="col" style={{ width: "5%" }}>Category</th>
                            <th scope="col" style={{ width: "33%" }}>teacher</th>
                            <th scope="col" style={{ width: "15%" }}>asinanation</th>
                        </tr>
                    </thead>
                    <tbody className="card-body">
                        {
                            ListCourse.map((register, index) => {
                                return (
                                    <tr key={register.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{register.course.code}</td>
                                        <td>{register.course.name}</td>
                                        <td>{register.course.credit}</td>
                                        <td>{register.course.category}</td>
                                        {
                                            register.teacher
                                                ? <>
                                                    <td style={{ color: "darkcyan" }}>{register.teacher.name} {register.teacher.firstName} {register.teacher.lastName}</td>
                                                    <td >
                                                        <button onClick={() => { setSelectCourse(register) }}
                                                            className="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#asignationTeacher"
                                                        >change teacher</button>
                                                    </td>
                                                </>
                                                : <>
                                                    <td></td>
                                                    <td>
                                                        <button onClick={() => { setSelectCourse(register) }}
                                                            className="btn btn-brown"
                                                            data-toggle="modal"
                                                            data-target="#asignationTeacher"
                                                        >ASSIGN TEACHER</button>
                                                    </td>
                                                </>
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="modal fade"
                id="asignationTeacher"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    SELECTED NEW TECHER
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h6 className="mb-4 text-info">Course: {course.name}</h6>
                                {
                                    <div className="form-group">
                                        <label>TEACHER</label>
                                        <select className="form-select input-add-course" name="teacher" onChange={handleChange}>
                                            
                                            {
                                                ListTeacher.map((teacher) => {
                                                    return (
                                                        <option key={teacher.id} value={teacher.id}>{teacher.name} {teacher.firstName} {teacher.lastName} ----- {teacher.speciality}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                }

                            </div>
                            <div className="modal-footer btn-create-semester">
                                <button type="submit"
                                    onClick={handleSubmit}
                                    className="btn btn-cyan"
                                    data-dismiss="modal">
                                    Activate
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Asignation;


