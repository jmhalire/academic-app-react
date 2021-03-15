import { useCallback, useContext, useEffect, useState } from 'react';
import { headers, url } from '../../configs/config';
import { UserContext } from '../../context';

export const useSelectedCourse = ({afterRegister,registerCourse})=>{

    const [Cred, setCred] = useState(0);

    const { setmessage, setisMessage } = useContext(UserContext);

    useEffect(() => {
        let cred = 0;
        registerCourse.forEach(element => {
            cred += element.credit
        });
        setCred(cred);
    }, [registerCourse])

    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        const idCourse = registerCourse.map(
            (value) => {
                const { id } = value
                return { course: id };
            }
        );
        fetch(`${url}/register/create`, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(idCourse)
        })
        .then(res=>res.json())
        .then(data=>{
            afterRegister();
            setmessage({
                nameClass: 'alert-info',
                value: data.message
            });
            setisMessage(true);
        })
        .catch(error=>{
            //this.props.afterRegister(true, { className: "alert-danger", value: message });
            console.log(error);
        })
      },
      [setmessage,setisMessage,afterRegister,registerCourse],
    );

    return {
        Cred,
        handleSubmit
    }
}