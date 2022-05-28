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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NjczMGYxMjRiNWQwMDM3OGZiY2U0In0sImlhdCI6MTY0ODg3MjM3OH0.X6YY9X8s7Et4pXp3Jt1Au5UwvjXTVQ6XG7BqWDcP7t0",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NjczMGYxMjRiNWQwMDM3OGZiY2U0In0sImlhdCI6MTY0ODg3MjM3OH0.X6YY9X8s7Et4pXp3Jt1Au5UwvjXTVQ6XG7BqWDcP7t0",
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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NjczMGYxMjRiNWQwMDM3OGZiY2U0In0sImlhdCI6MTY0ODg3MjM3OH0.X6YY9X8s7Et4pXp3Jt1Au5UwvjXTVQ6XG7BqWDcP7t0",
      },
    });
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Update note
  const updateNote = (id, title, description, tags) => {
    // API CALL
    console.log("Update note called");
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
