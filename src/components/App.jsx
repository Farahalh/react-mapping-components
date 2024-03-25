import React from "react";
import Header from "./Header";
import emojipedia from "../emojipedia";
import CreateEntry from "./CreateEntry";

function App() {
  return (
    <div id="root">
      <Header />
      <div className="dictionary">{emojipedia.map(CreateEntry)}</div>
    </div>
  );
}

export default App;
