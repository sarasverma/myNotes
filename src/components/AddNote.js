import React, { useContext, useState } from "react";
import notesContext from "../context/notes/noteContext";

function AddNote(props) {
  const [note, setNote] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const context = useContext(notesContext);

  const handleAddNote = (event) => {
    // make the page not reload
    event.preventDefault();
    context.addNote(note.title, note.description, note.tags);
    props.showAlert("Added note successfully !", "success");
    setNote({
      title: "",
      description: "",
      tags: "",
    });
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
            value={note.title}
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
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            name="tags"
            value={note.tags}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${
            note.description < 5 || note.title < 5 || note.tags < 3
              ? "disabled"
              : ""
          }`}
          onClick={handleAddNote}
        >
          Add note
        </button>
      </form>
    </>
  );
}

export default AddNote;
