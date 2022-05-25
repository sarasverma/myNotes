import { useState } from "react";
import NoteContext from "./noteContext.js";

const NoteState = (props) => {
  const notesExample = [
    {
      _id: "6247e2662cdb81krlfaf83f133473b",
      user: "6246730f124b5d00378fbce4",
      title: "This is updated note",
      description: "bc kaam kar",
      tags: "testing kam kar raha hai",
      date: "2022-04-02T05:43:02.509Z",
      __v: 0,
    },
    {
      _id: "6247e347a47fbfdfyjrkd35a7697cb1b",
      user: "6246730f124b5d00378fbce4",
      title: "Hello world",
      description: "HI this is hello world program",
      tags: "testing",
      date: "2022-04-02T05:46:47.835Z",
      __v: 0,
    },
    {
      _id: "6247e347adfeafddf47fb35a7697cb1b",
      user: "6246730f124b5d00378fbce4",
      title: "Hello world",
      description: "HI this is hello world program",
      tags: "testing",
      date: "2022-04-02T05:46:47.835Z",
      __v: 0,
    },
    {
      _id: "6247e347a343547fb35a7697cb1gfgfgdb",
      user: "6246730f124b5d00378fbce4",
      title: "Hello world",
      description: "HI this is hello world program",
      tags: "testing",
      date: "2022-04-02T05:46:47.835Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesExample);

  const addNote = (title, description, tags) => {
    const note = {
      _id: "6247e347a343547fb35a7697cb1gfgfgdb",
      user: "6246730f124b5d00378fbce4",
      title: title,
      description: description,
      tags: tags,
      date: "2022-04-02T05:46:47.835Z",
      __v: 0,
    };

    setNotes(notesExample.concat(note));
  };
  const deleteNote = () => {};
  const updateNote = () => {};

  // all component inside the NoteState will be able to use state
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, updateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
