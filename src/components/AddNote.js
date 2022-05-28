import React, { useContext, useState } from "react";
import notesContext from "../context/notes/noteContext";

function AddNote() {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tags: "default",
  });

  const context = useContext(notesContext);

  const handleAddNote = (event) => {
    // make the page not reload
    event.preventDefault();
    context.addNote(note.title, note.description, note.tags);
  };

  const onChange = (event) => {
    // special syntax spreader operator
    setNote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <h2>Add new note ! </h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Tittle
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Add note
        </button>
      </form>
    </>
  );
}

export default AddNote;
