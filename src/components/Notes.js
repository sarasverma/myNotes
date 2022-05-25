import React, { useContext } from "react";
import notesContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes(props) {
  const context = useContext(notesContext);
  const { notes, UpdateNotes } = context;

  return (
    // .map return a new array actually
    <div className="row">
      {notes.map((note) => {
        return <NoteItem key={note._id} note={note} />;
      })}
    </div>
  );
}

export default Notes;
