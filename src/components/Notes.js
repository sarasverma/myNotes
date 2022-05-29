import React, { useContext, useEffect, useRef, useState } from "react";
import notesContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

function Notes(props) {
  const context = useContext(notesContext);
  const { notes } = context;

  useEffect(() => {
    // will only run once (componentDidMount)
    context.fetchNotes();
    // eslint-disable-next-line
  }, []);

  // modal related stuff
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etags: "",
  });

  const handleUpdate = (event) => {
    context.updateNote(note.id, note.etitle, note.edescription, note.etags);
  };

  const onChange = (event) => {
    // special syntax spreader operator
    setNote({ ...note, [event.target.name]: event.target.value });
  };
  const ref = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etags: currentNote.tags,
    });
  };

  return (
    <div className="container">
      <AddNote />
      <button
        ref={ref}
        style={{ display: "none" }}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Togal modal(hidden)
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-etitle" id="exampleModalLabel">
                Edit note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Tittle
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    minLength={5}
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    minLength={5}
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etags" className="form-label">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etags"
                    name="etags"
                    minLength={3}
                    value={note.etags}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className={`btn btn-primary ${
                  note.edescription < 5 || note.etitle < 5 || note.etags < 3
                    ? "disabled"
                    : ""
                }`}
                onClick={handleUpdate}
              >
                Save note
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="my-3">Your notes</h2>
      <div className="container">
        {notes.length === 0 && "No notes to display .."}
        {/* // .map return a new array actually */}
        <div className="row">
          {notes.map((note) => {
            return (
              <NoteItem updateNote={updateNote} key={note._id} note={note} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Notes;
