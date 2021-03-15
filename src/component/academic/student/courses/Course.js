import React from "react";
import './Course.css'

const Course = () => {
  return (
    <div className="courses">
      <div
        className="btn-group btn-group-lg list-group"
        aria-label="Gran grupo de botones"
        id="list-tab"
        role="tablist"
      >
        <button
          type="button"
          className="btn btn-cyan active"
          data-toggle="list"
          href="#list-visitas"
        >
          Courses Aproved
          </button>
        <button
          type="button"
          className="btn btn-cyan"
          data-toggle="list"
          href="#list-vacunas"
        >
          Courses To Take
          </button>
      </div>
      <div className="tab-content mt-3" id="nav-tabContent">
        <div
          className="tab-pane fade show active card card-list-course"
          id="list-visitas"
          role="tabpanel"
          aria-labelledby="list-visitas-list"
        >
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col" style={{ width: "5%" }}>
                  Nro
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Course
                  </th>
                <th scope="col" style={{ width: "50%" }}>
                  Name
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Credits
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Category
                  </th>
                <th scope="col" style={{ width: "15%" }}>
                  Obsservation
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>DESAPROBADO</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>IF204AIN</td>
                <td>ACTIVIDADES DE BIENES DE PRODUCCION DE SERVICIOS</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>DESAPROBADO</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr><tr>
                <th scope="row">8</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="tab-pane fade card card-list-course"
          id="list-vacunas"
          role="tabpanel"
          aria-labelledby="list-vacunas-list"
        >
          <table className="table table-bordered table-notes">
            <thead>
              <tr>
                <th scope="col" style={{ width: "5%" }}>
                  Nro
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Course
                  </th>
                <th scope="col" style={{ width: "50%" }}>
                  Name
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Credits
                  </th>
                <th scope="col" style={{ width: "10%" }}>
                  Category
                  </th>
                <th scope="col" style={{ width: "15%" }}>
                  Obsservation
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>DESAPROBADO</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>IF204AIN</td>
                <td>ACTIVIDADES DE BIENES DE PRODUCCION DE SERVICIOS</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>DESAPROBADO</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>IF204AIN</td>
                <td>ADMINISTRACION DE CENTROS DE COMPUTO</td>
                <td>4</td>
                <td>OE</td>
                <td>APROBADO</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Course
