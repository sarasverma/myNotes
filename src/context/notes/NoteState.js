import { useState } from "react";
import NoteContext from "./noteContext.js";

const NoteState = (props) => {
  // can't make https becase of security policy of browsers
  const host = "http://localhost:5000";
  const notesArray = []; // for frontend

  const [notes, setNotes] = useState(notesArray);

  // Fetch notes
  const fetchNotes = async () => {
    // API CALL
    const url = `${host}/api/notes/fetchnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    setNotes(await response.json());
  };

  // Add note
  const addNote = async (title, description, tags) => {
    // API calls
    const url = `${host}/api/notes/createnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tags }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
    // console.log("after adding new notes ", notes);
  };

  // Delete note
  const deleteNote = async (id) => {
    // API CALL
    const url = `${host}/api/notes/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Update note
  const updateNote = async (id, title, description, tags) => {
    // API CALL
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tags }),
    });

    // for updating front end
    let newNotes = JSON.parse(JSON.stringify(notes)); // create deep Copy of notesArray
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tags = tags;
      }
    }
    setNotes(newNotes);
  };

  // all component inside the NoteState will be able to use state
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
