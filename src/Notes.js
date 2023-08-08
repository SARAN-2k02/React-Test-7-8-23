import React from "react";
import { useState } from "react";
import NotesList from "./NotesList";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [state, setState] = useState([]);

  function AddNote() {
    if (title === "" || value === "") {
      alert("hey Fill the value");
    } else {
      setState([...state, { title, value }]);
    }
    setTitle("");
    setValue("");
  }

  return (
    <>
      <div className="input-box-1">
        <input
          type="text"
          placeholder="Enter Title"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        {/* <form> */}
        <div className="input-box-2">
          <label>
            <textarea
              type="text"
              className="Notes-input"
              name="name"
              placeholder="Enter a Notes"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="Sub-btn" onClick={AddNote}>
          Add Notes
        </button>
      </div>

      <div>
        <NotesList data={state} setState={setState} />
      </div>
    </>
  );
};

export default Notes;
