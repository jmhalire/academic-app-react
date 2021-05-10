import { useState } from "react"

export const useStateCreateCourse = () => {

    const [formCourse, setFormCourse] = useState({ career: '', code: '', name: '', category: '', credit: '' })
    const [selectCareer, setSelectCareer] = useState(false)
    const [createCareer, setCreateCareer] = useState(false)

    const handleChange = ({ target }) => {
        setFormCourse({
            ...formCourse,
            [target.name]: target.value
        })
        if (target.name === 'career') {
            if (target.value !== '0') {
                setSelectCareer(true);
            } else {
                setSelectCareer(false);
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formCourse);
    }

    const cleanForm = (e) => {
        setFormCourse({
            ...formCourse,
            code: '',
            credit: '',
            category: '',
            name: ''
        })
    }

    return {
        selectCareer,
        formCourse,
        createCareer,
        handleChange,
        handleSubmit,
        setCreateCareer,
        cleanForm
    }

}