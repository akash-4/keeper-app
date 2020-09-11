import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [showNote, setNoteState] = useState(false);
  function handleShowNote() {
    setNoteState(() => {
      return true;
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {showNote && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            autoComplete="off"
          />
        )}
        <textarea
          name="content"
          onClick={handleShowNote}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={showNote ? 3 : 1}
          autoComplete="off"
        />
        {showNote && (
          <Zoom in={showNote}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
