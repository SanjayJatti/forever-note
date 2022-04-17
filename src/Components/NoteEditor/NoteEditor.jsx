import React from "react";
import { ReactQuillEditor } from "../ReactQuillEditor/ReactQuillEditor";
import { useNoteActions } from "../../Context/NoteActionsContext";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNotes } from "../../Context/NotesContext";
import "./NoteEditor.css";
import { SET_NOTES } from "../../Constants/NotesConstant";
import { useState } from "react";
import { SET_TITLE, RESET, SET_LABELS } from "../../Constants/NoteActionsConstants";
import { EditorFooter } from "../EditorFooter/EditorFooter";

const NoteEditor = ({ setShowNoteEditor }) => {
  const { noteActionsState, noteActionsDispatch } = useNoteActions();
  const [note, setNote] = useState();

  const { authState } = useAuth();
  const { token } = authState;
  const { notesDispatch } = useNotes();

  const noteSaveHandler = async () => {
    try {
      const response = await axios.post(
        "api/notes",
        {
          note: {
            note,
            ...noteActionsState,
          },
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({
        type: SET_NOTES,
        payload: response.data.notes,
      });
      noteActionsDispatch({ type: RESET });
      setShowNoteEditor(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="note-editor-container">
        <h2 className="text-primary">Create New Note</h2>
        <input
          type="text"
          placeholder="Title of Note"
          className="title-input"
          onChange={(e) =>
            noteActionsDispatch({ type: SET_TITLE, payload: e.target.value })
          }
        />
        <ReactQuillEditor note={note} setNote={setNote} />
        <div className="chips-container">
          {noteActionsState.labels.length !== 0 &&
            noteActionsState.labels.map((labelValue, index) => (
              <div className="chip" kay={index}>
                <span className="chip-content">{labelValue}</span>
                <i
                  className="fas fa-times"
                  onClick={() =>
                    noteActionsDispatch({
                      type: SET_LABELS,
                      payload: labelValue,
                    })
                  }
                ></i>
              </div>
            ))}
        </div>
        <EditorFooter />
        <div className="btn-wrapper">
          <button className="btn btn-primary" onClick={() => noteSaveHandler()}>
            Add Note
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setShowNoteEditor(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export { NoteEditor };
