import React from "react";
import AddNote from "./AddNote";
import Notes from "./Notes";

function Home() {
  return (
    <div className="container">
      <AddNote />
      <div className="container">
        <h2 className="my-3">Your notes</h2>
        <Notes />
      </div>
    </div>
  );
}

export default Home;
