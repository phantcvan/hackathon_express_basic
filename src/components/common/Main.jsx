import React, { useEffect, useState } from 'react';
import "./main.css";
import Note from './Notes';

const Main = () => {
    const [content, setContent] = useState("");
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleAdd = (e) => {
        setContent(e.target.value);
    };

    const handleClick = () => {
        if (!content) {
            alert("Input Blank");
            return;
        } else if (content.length < 10) {
            alert("Content at least 10 characters");
            return;
        } else {
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
                    setLoading(pre => !pre)
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }

    const loadData = () => {
        fetch("http://localhost:8000/api/v1/notes")
            .then((res) => res.json())
            .then((data) => {
                setNotes(data.notes);
                console.log("data", data);
            })
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        loadData()
    }, [loading]);

    // Xoá note
    const handleDeleteNote = (noteId) => {
        fetch(`http://localhost:8000/api/v1/notes/${noteId}`, {
            method: "DELETE",
        })
        .then((response) => {
              console.log(response);
            if (!response.ok) {
              throw new Error("Failed to delete note");
            }
            return response.json();
          })
          .then((data) => {
            setLoading(prevLoading => !prevLoading);
          })
          .catch((error) => {
            console.log(error);
          });
      };
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
                    <Note 
                    key={note.Note_id} 
                    content={note.Content} 
                    onDelete={() => handleDeleteNote(note.Note_id)}
                    />
                ))}
            </section>
        </>
    );
};

export default Main;