import React, { useEffect, useState } from 'react';
import "./main.css";
import Note from './Notes';

const Main = () => {
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const handleAdd = (e) => {
        setContent(e.target.value);
    };

    const handleClick = () => {
        fetch("http://localhost:8000/api/v1/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Content: content }),
        })
            .then((response) => response.json())
            .then((data) => {
                setContent("");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/notes")
            .then((res) => res.json())
            .then((data) => {
                setNotes(data.notes);
                console.log("data",data);
            })
            .catch((err) => console.log(err))
    }, [notes])

    return (
        <>
            <div className="main_container">
                <h4>Title</h4>
                <input type="text" name="content" id="content" onChange={handleAdd} value={content} />
                <button className='btnAdd' onClick={handleClick}>
                    <i
                        className="fa-solid fa-circle-plus iconAdd">
                    </i>
                </button>
            </div>
            <section className='section-note'>
                {notes?.map((note) => (
                    <Note key={note.Note_id} content={note.Content} />
                ))}
            </section>
        </>
    );
};

export default Main;