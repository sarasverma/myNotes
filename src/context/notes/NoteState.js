import NoteContext from "./noteContext.js";

const NoteState = (props) => {
  // all component inside the NoteState will be able to use state
  return (
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};

export default NoteState;
