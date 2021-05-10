import { useState } from "react"

export const  useStateCreateCareer = () => {
    const [formCareer, setFormCareer] = useState({code:'',name:''})

    const handleChange = ({target}) => {
        setFormCareer({
            ...formCareer,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formCareer);
    }

    return {
        formCareer,
        handleChange,
        handleSubmit
    }

}