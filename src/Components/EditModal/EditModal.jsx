import React from "react";
import { useNotes } from "../../Context/NotesContext";
import { useAuth } from "../../Context/AuthContext";
import { SET_NOTES } from "../../Constants/NotesConstant";
import { SET_NOTE, SET_TITLE, SET_LABELS } from "../../Constants/NoteActionsConstants";
import axios from "axios";
import { ReactQuillEditor } from "../ReactQuillEditor/ReactQuillEditor";
import "./EditModal.css";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { EditorFooter } from "../EditorFooter/EditorFooter";

const EditModal = ({ setEditModal, noteCard }) => {
  const { notesDispatch } = useNotes();
  const { noteActionsState, noteActionsDispatch } = useNoteActions();
  const { authState } = useAuth();
  const { token } = authState;
 
  const noteEditHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/notes/${noteCard._id}`,
        {
          note: {...noteActionsState },
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({
        type: SET_NOTES,
        payload: [...response.data.notes],
      });
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="edit-modal-container">
      <div className="note-editor-container">
        <h2 className="text-primary">Edit Note</h2>
        <input
          type="text"
          placeholder="Title of Note"
          className="title-input"
          value={noteActionsState.title}
          onChange={(e) =>
            noteActionsDispatch({ type: SET_TITLE, payload: e.target.value })
          }
        />
        <ReactQuillEditor
          note={noteActionsState.note}
          setNote={(e) =>
            noteActionsDispatch({
              type: SET_NOTE,
              payload: { ...noteActionsState, note: e },
            })
          }
        />
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
        <EditorFooter noteCard={noteCard} />
        <div className="btn-wrapper">
          <button
            className="btn btn-primary"
            onClick={() => {
              noteEditHandler(noteCard);
              setEditModal(false);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => setEditModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export { EditModal };
