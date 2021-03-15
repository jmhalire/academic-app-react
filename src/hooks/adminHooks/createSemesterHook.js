import { useContext, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";

export const useCreateSemester = (createdSemester) => {
    
    //const [values, setValue] = useState(initialState);
    const [dataSemester, setDataSemester] = useState({ code: '', fromDate: '', toDate: '' });

    const { createdSem, setmessage, setisMessage, } = useContext(UserContext);

//createdSem
    const handleChange = (event) => {
        const { name, value } = event.target;
        setDataSemester({
            ...dataSemester,
            [name]: value
        })
    }

    const handleSubmitCreateSemester = () => {
        const { code, fromDate, toDate } = dataSemester;
        if (code !== "" && fromDate !== "" && toDate !== ""){
            fetch(`${url}/semester/create`, {
                method: "POST",
                headers: headers(),
                body: JSON.stringify(dataSemester)
            })
                .then(res => res.json())
                .then(data => {
                    setmessage({
                        value: data.message,
                        nameClass: 'alert-info'
                    });
                    setisMessage(true);
                    createdSemester();
                    createdSem();
                    //window.location.href = "./admin"
                })
                .catch(err => err);
    
        } else {
            console.log('llenar todos los campos');
        } 
    }

    return {
        dataSemester,
        handleChange,
        handleSubmitCreateSemester
    }
}