import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './noteEntry.css';


const InputNote = ({ targetInput, updateNote }) => {

    const { name, noteId, state, value } = targetInput;
    const [note, setNote] = useState({ noteId, name, value: (!value) ? 0: value })

    const handleChange = ({target}) => {
        const { value } = target;
        setNote({
            ...note,
            value
        })
    }

    const handleBlur = (e) =>{
        updateNote(note)
    }

    return (
        <div className='form-note'>
            {
                (state === 'ACTIVATED')
                    ? (
                        <input className="form-control"
                            id='note-value'
                            type='number'
                            value={note.value}
                            name={note.name}
                            min="0" 
                            max="20" 
                            step="0.01"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    )
                    : (<>{value}</>)
            }
        </div>
    )
}

InputNote.propTypes = {
    targetInput: PropTypes.object.isRequired,
    updateNote: PropTypes.func.isRequired
}

export default InputNote
