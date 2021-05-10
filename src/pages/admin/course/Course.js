import React, { useState } from 'react';
import ListCourse from './ListCourse';
import SearchCourse from './SearchCourse';
import CreateCourse from './CreateCourse';
import { useStateListCareer } from '../../../hooks/adminHooks/careerHook/useListCareer';

/*styles */
import './course.css'

const Course = () => {
  const [selectCareer, setSelectCareer] = useState({id:0, name:''})

  const {
    listCareer
  } = useStateListCareer();

  return (
    <>
      <CreateCourse listCareer={listCareer} />
      <div className="card">
        <SearchCourse listCareer={listCareer} setSelectCareer={setSelectCareer} />
        {(selectCareer.id!==0) &&
          <ListCourse selectCareer={selectCareer} />
        }
      </div>
    </>
  )
}


export default Course
