import { useState } from "react"

export const useStateSearchCourse = ({ listCareer, setSelectCareer }) => {

    const [idCareerSearch, setIdCareerSearch] = useState(0)

    const handleChange = ({ target }) => {
        setIdCareerSearch(parseInt(target.value))
        setSelectCareer({
            id: 0,
            name: ''
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let career = listCareer.filter(item => item.id === idCareerSearch)
        setSelectCareer({
            id: idCareerSearch,
            name: career[0].name 
        });
    }

    return {
        idCareerSearch,
        handleChange,
        handleSubmit
    }
}