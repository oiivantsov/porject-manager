import React, { useState, useEffect } from "react";
import Note from "../components/Note";
import CreateArea from "../components/CreateArea";
import axios from 'axios';

function ProjectPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  function addNote(newNote) {
    axios.post('http://localhost:5000/api/projects', {
      title: newNote.title,
      content: newNote.content
    })
    .then(response => {
      setNotes(prevNotes => {
        return [...prevNotes, response.data];
      });
    })
    .catch(error => {
      // Если произошла ошибка при отправке запроса, выводим её в консоль
      console.error('Error adding note:', error);
    });
  }

  function deleteNote(id) {
    console.log(notes[id])
    axios.delete(`http://localhost:5000/api/projects/${notes[id]._id}`)
    .then(() => {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    })
    .catch(error => {
      console.error('Error deleting note:', error);
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}

export default ProjectPage;
