import { useCallback, useContext, useState } from "react";
import { headers, url } from "../../configs/config";
import { UserContext } from "../../context";
//import { AdminContext } from "../../context";

export const useNoteEntry = () => {
  const [SelectCourse, setSelectCourse] = useState({})
  const [dateConsult, setdateConsult] = useState(false);
  const [ListStudents, setListStudents] = useState([]);
  const [ListFirstNote, setListFirstNote] = useState([]);
  const [ListSecondNote, setListSecondNote] = useState([]);
  const [ListThirdNote, setListThirdNote] = useState([]);
  const [ListSubsNote, setListSubsNote] = useState([]);

  const { setisMessage, setmessage } = useContext(UserContext);
  
  const handleSubmit = useCallback(
    (course) => {
      setSelectCourse(course);
      fetch(`${url}/teacher/notes-of-course/${course.id}`, {
        method: "GET",
        headers: headers()
      })
        .then(res => res.json())
        .then(data => {
          setListStudents(data);
          setdateConsult(true);
        })
    }, []
  )
  const handleAddFirstNote = (Note, idNote) => {
    const dato = {
      idNote,
      Note
    }
    let repet = false;
    for (let i = 0; i < ListFirstNote.length; i++) {
      const element = ListFirstNote[i];
      if (element.idNote === idNote) {
        repet = true;
        break;
      }
    }
    if (!repet) {
      let arrayNotes = [...ListFirstNote, dato];
      setListFirstNote(arrayNotes);
    }
  }
  const handleAddSecondNote = (Note, idNote) => {
    const dato = {
      idNote,
      Note
    }
    let repet = false;
    for (let i = 0; i < ListSecondNote.length; i++) {
      const element = ListSecondNote[i];
      if (element.idNote === idNote) {
        repet = true;
        break;
      }
    }
    if (!repet) {
      let arrayNotes = [...ListSecondNote, dato];
      setListSecondNote(arrayNotes);
    }
  }
  const handleAddThirdNote = (Note, idNote) => {
    const dato = {
      idNote,
      Note
    }
    let repet = false;
    for (let i = 0; i < ListThirdNote.length; i++) {
      const element = ListThirdNote[i];
      if (element.idNote === idNote) {
        repet = true;
        break;
      }
    }
    if (!repet) {
      let arrayNotes = [...ListThirdNote, dato];
      setListThirdNote(arrayNotes);
    }
  }

  const handleAddSubsNote = (Note, idNote) => {
    const dato = {
      idNote,
      Note
    }
    let repet = false;
    for (let i = 0; i < ListSubsNote.length; i++) {
      const element = ListSubsNote[i];
      if (element.idNote === idNote) {
        repet = true;
        break;
      }
    }
    if (!repet) {
      let arrayNotes = [...ListSubsNote, dato];
      setListSubsNote(arrayNotes);
    }
  }

  const handleSubmitNoteEntry = useCallback(
    (e) => {
      e.preventDefault();
      let ListNotes = [];
      //firstPartial, secondPartial, thirdPartial
      ListNotes.push(ListFirstNote)
      ListNotes.push(ListSecondNote)
      ListNotes.push(ListThirdNote)
      ListNotes.push(ListSubsNote)
      fetch(`${url}/teacher/note-entry`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(ListNotes)
      })
        .then(res => res.json())
        .then(data => {
          //despues de enviar las notas tenemos que vaciar las notas selecionadas
          setListFirstNote([]);
          setListSecondNote([]);
          setListThirdNote([]);
          setListSubsNote([]);
          setisMessage(true);
          setmessage({
            nameClass: 'alert-info',
            value: data.message
          });
          setTimeout(() => {
            handleSubmit(SelectCourse);
          }, 1000);
        })
    },
    [
      ListFirstNote, ListSecondNote, ListThirdNote, ListSubsNote,
      setisMessage, setmessage, SelectCourse, handleSubmit
    ],
  )

  return {
    ListStudents,
    SelectCourse,
    dateConsult,
    handleSubmit,
    handleAddFirstNote,
    handleAddSecondNote,
    handleAddThirdNote,
    handleAddSubsNote,
    handleSubmitNoteEntry
  }
}