import React from 'react'
import "./Career.css";
import CreateCareer from "./createCareer/CreateCareer";
import { useListCareer } from "../../../../hooks/adminHooks/careerHooks";


const Career = () => {
  const { 
    createCareer, 
    listCareer, 
    setmessage,
    setisMessage,
    setcreateCareer,
    setupdateList,
  } = useListCareer();

  
  return (
    <div className="career-admin">
      <div className="header-create-career p-3 my-2">
        <button
          className="btn btn-cyan btn-new-career"
          onClick={()=>{setcreateCareer(!createCareer)}}
        >
          create new career
          </button>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="card card-create-career">
            <table class="table table-bordered">
              <thead className="card-header">
                <tr>
                  <th scope="col" style={{ width: "5%" }}>
                    Nro
                    </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Code
                    </th>
                  <th scope="col" style={{ width: "70%" }}>
                    Name
                    </th>
                  <th scope="col" style={{ width: "15%" }}>
                    student register
                    </th>
                </tr>
              </thead>
              <tbody className="card-body">
                {
                  listCareer.map((career, index) => {
                    return (
                      <tr key={career.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{career.code}</td>
                        <td>{career.name}</td>
                        <td>4</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        {createCareer && <CreateCareer
                          setupdateList={setupdateList}
                          setmessage={setmessage}
                          setisMessage={setisMessage}

        />}
      </div>
    </div>
  )
}

export default Career
