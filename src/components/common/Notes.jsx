import React, { useEffect } from 'react';
import "./note.css"

const Notes = ({ content,onDelete }) => {
const handleDelete=()=>{
    onDelete()
}
    return (
        <div className='container'>
            <div className='note-content'>
                <p className='note-span'>{content}</p>
            </div>
            <button className='btnDelete' onClick={handleDelete}>
                <i className="fa-solid fa-trash icon-trash"></i>
            </button>
        </div>
    )
}

export default Notes;