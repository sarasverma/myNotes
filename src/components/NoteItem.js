import React, { useContext } from "react";
import notesContext from "../context/notes/noteContext";

function NoteItem(props) {
  const context = useContext(notesContext);

  const { note, updateNote } = props;

  return (
    <div className="col-md-4 my-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title} </h5>
            <i
              className="fa-solid fa-pen mx-2"
              onClick={() => {
                updateNote(note);
              }}
            ></i>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                context.deleteNote(note._id);
                props.showAlert("Deleted note successfully !", "success");
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
