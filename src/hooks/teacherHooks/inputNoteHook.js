import { useContext, useState } from "react";
import { UserContext } from "../../context";

export const useInputNote = (props) => {
    const {note,handleAddFirstNote,handleAddSecondNote,handleAddThirdNote,handleAddSubsNote } = props;

    const {id:idNote, firstAverage, secondAverage, thirdAverage, substitute} = note;

    const { semActive } = useContext(UserContext);

    const [firstNote, setFirstNote] = useState(firstAverage);
    const [secondNote, setSecondNote] = useState(secondAverage);
    const [thirdNote, setThirdNote] = useState(thirdAverage);
    const [substituteNote, setSubstituteNote] = useState(substitute);

    const handleChangeFirstNote = (e) => {
        const { value } = e.target;
        setFirstNote(value)
    }

    const handleChangeSecondNote = (e) => {
        const { value } = e.target;
        setSecondNote(value)
    }

    const handleChangeThirdNote = (e) => {
        const { value } = e.target;
        setThirdNote(value)
    }

    const handleChangeSubsNote = (e) => {
        const { value } = e.target;
        setSubstituteNote(value)
    }

    const BlurInputFirstNote = () => {
        let note = parseFloat(firstNote);
        handleAddFirstNote(note||0, idNote);
    }

    const BlurInputSecondtNote = () => {
        let note = parseFloat(secondNote);
        handleAddSecondNote(note || 0, idNote);
    }

    const BlurInputThirdNote = () => {
        let note=parseFloat(thirdNote);
        handleAddThirdNote(note||0, idNote);
    }

    const BlurInputSubsNote = () => {
        let note=parseFloat(substituteNote);
        handleAddSubsNote(note||0, idNote);
    }

    return {
        semActive,
        firstNote,
        secondNote,
        thirdNote,
        substituteNote,
        handleChangeFirstNote,
        handleChangeSecondNote,
        handleChangeThirdNote,
        handleChangeSubsNote,
        BlurInputFirstNote,
        BlurInputSecondtNote,
        BlurInputThirdNote,
        BlurInputSubsNote
    }
}