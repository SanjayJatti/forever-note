import React from "react";
import "./NoteCard.css";
import { useNavigate, useLocation, matchPath } from "react-router-dom";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { SET_LABELS, SET_NOTE } from "../../Constants/NoteActionsConstants";
import { useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import { useAuth } from "../../Context/AuthContext";
import { useNotes } from "../../Context/NotesContext";
import { SET_NOTES } from "../../Constants/NotesConstant";
import axios from "axios";
import { EditorFooter } from "../EditorFooter/EditorFooter";

const NoteCard = ({ noteCard }) => {
  const [editModal, setEditModal] = useState(false);

  const { noteActionsState, noteActionsDispatch } = useNoteActions();
  const { authState } = useAuth();
  const { token } = authState;
  const { notesState, notesDispatch } = useNotes();

  const { pathname } = useLocation();

  const restoreFromTrashHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/notes/${noteCard._id}`,
        {
          note: { ...noteCard, inTrash: false },
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({ type: SET_NOTES, payload: [...response.data.notes] });
    } catch (error) {
      console.log(error);
    }
  };

  const moveToTrashHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/notes/${noteCard._id}`,
        {
          note: { ...noteCard, inTrash: true },
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({ type: SET_NOTES, payload: [...response.data.notes] });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteNoteHandler = async (noteCard) => {
    try {
      const response = await axios.delete(`/api/notes/${noteCard._id}`, {
        headers: {
          authorization: token,
        },
      });
      notesDispatch({
        type: SET_NOTES,
        payload: [...response.data.notes],
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {editModal && (
        <EditModal setEditModal={setEditModal} noteCard={noteCard} />
      )}
      <div className={`note-card ${noteCard.color}`}>
        {noteCard.priority && (
          <div className="priority-chip">{noteCard.priority}</div>
        )}

        {noteCard.title && <strong>Title: {noteCard.title}</strong>}
        <div
          className="note-description"
          dangerouslySetInnerHTML={{ __html: noteCard.note }}
        ></div>

        <div className="chips-container">
          {noteCard.labels.length !== 0 &&
            noteCard.labels.map((labelValue, index) => (
              <div className="chip" kay={index}>
                <span className="chip-content">{labelValue}</span>
                <i className="fas fa-times"></i>
              </div>
            ))}
        </div>

        <div className="note-card-footer">
          <i
            className="fas fa-edit"
            onClick={() => {
              noteActionsDispatch({ type: SET_NOTE, payload: noteCard });
              setEditModal(true);
            }}
          ></i>
          {noteCard.inTrash ? (
            <i
              className="fas fa-trash-restore"
              onClick={() => restoreFromTrashHandler(noteCard)}
            ></i>
          ) : (
            <i
              className="fas fa-trash-alt"
              onClick={() => {
                moveToTrashHandler(noteCard);
              }}
            ></i>
          )}

          {pathname === "/trash" && (
            <i
              className="fas fa-trash-alt"
              onClick={() => deleteNoteHandler(noteCard)}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};
export { NoteCard };
