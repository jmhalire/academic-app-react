import React from 'react'
import { useInputNote } from '../../../../hooks/teacherHooks/inputNoteHook';

const InputNote = (props) => {

    //console.log(notesEntered);

    const {
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
    } = useInputNote(props);

    const { firstPartial, secondPartial, thirdPartial } = semActive;

    return (
        <>
            <td>
                {
                    firstPartial
                        ? <input type="text" autoComplete="off" className="form-control input-note-entry" name="firstNote" value={firstNote} onBlur={BlurInputFirstNote} onChange={handleChangeFirstNote} />
                        : firstNote
                }
            </td>
            <td>
                {
                    secondPartial
                        ? <input type="text" autoComplete="off" className="form-control input-note-entry" name="firstNote" value={secondNote} onBlur={BlurInputSecondtNote} onChange={handleChangeSecondNote} />
                        : secondNote
                }
            </td>
            <td>
                {
                    thirdPartial
                        ? <input type="text" autoComplete="off" className="form-control input-note-entry" name="firstNote" value={thirdNote} onBlur={BlurInputThirdNote} onChange={handleChangeThirdNote} />
                        : thirdNote
                }
            </td>
            <td>
                {
                    thirdPartial
                        ? <input type="text" autoComplete="off" className="form-control input-note-entry" name="firstNote" value={substituteNote} onBlur={BlurInputSubsNote} onChange={handleChangeSubsNote} />
                        : substituteNote
                }
            </td>
        </>
    )
}


export default InputNote;

