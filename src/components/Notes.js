import React, { useContext, useEffect } from "react";
import notesContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

function Notes(props) {
  const context = useContext(notesContext);
  const { notes, UpdateNotes } = context;

  useEffect(() => {
    // will only run once (componentDidMount)
    context.fetchNotes();
  }, []);

  return (
    <div className="container">
      <AddNote />
      <h2 className="my-3">Your notes</h2>
      <div className="container">
        {/* // .map return a new array actually */}
        <div className="row">
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
