import React, { useEffect } from 'react';
import "./note.css"

const Notes = ({ content }) => {


    return (
        <div className='container'>
            <div className='note-content'>
                <p>{content}</p>
            </div>
            <i className="fa-solid fa-trash icon-trash"></i>
        </div>
    )
}

export default Notes