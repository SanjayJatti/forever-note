import React from "react";
import "./NoteCard.css";
import { useLocation } from "react-router-dom";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { SET_NOTE } from "../../Constants/NoteActionsConstants";
import { useState } from "react";
import { EditModal } from "../EditModal/EditModal";
import { useAuth } from "../../Context/AuthContext";
import { useNotes } from "../../Context/NotesContext";
import { SET_NOTES } from "../../Constants/NotesConstant";
import { SET_ARCHIVES } from "../../Constants/ArchiveConstants";
import axios from "axios";
import { useArchive } from "../../Context/ArchiveContext";
import toast from "react-hot-toast";

const NoteCard = ({ noteCard }) => {
  const [editModal, setEditModal] = useState(false);
  const { noteActionsDispatch } = useNoteActions();
  const { authState } = useAuth();
  const { token } = authState;
  const { notesDispatch } = useNotes();
  const { archiveDispatch } = useArchive();
  const { pathname } = useLocation();

  const toggleBookmarkHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/notes/${noteCard._id}`,
        {
          note: { ...noteCard, pinned: !noteCard.pinned },
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({ type: SET_NOTES, payload: [...response.data.notes] });
    } catch (error) {
      toast.error("Failed to pin");
    }
  };
  const addToArchivesHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/notes/archives/${noteCard._id}`,
        {
          note: noteCard,
        },
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({ type: SET_NOTES, payload: [...response.data.notes] });
      archiveDispatch({
        type: SET_ARCHIVES,
        payload: [...response.data.archives],
      });
      toast.success("Added to archieve");
    } catch (error) {
      toast.error("Failed to add in archieve");
    }
  };
  const restoreFromArchivesHandler = async (noteCard) => {
    try {
      const response = await axios.post(
        `/api/archives/restore/${noteCard._id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      notesDispatch({ type: SET_NOTES, payload: [...response.data.notes] });
      archiveDispatch({
        type: SET_ARCHIVES,
        payload: [...response.data.archives],
      });
      toast.success("Restored from archive");
    } catch (error) {
      toast.error("Unable to restore from archieve");
    }
  };

  const removeFromArchivesHandler = async (noteCard) => {
    try {
      const response = await axios.delete(
        `/api/archives/delete/${noteCard._id}`,
        {
          headers: { authorization: token },
        }
      );
      archiveDispatch({
        type: SET_ARCHIVES,
        payload: [...response.data.archives],
      });
      toast.success("Note deleted");
    } catch (error) {
      toast.error("Failed to delete");
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
      toast.success("Moved to the trash");
    } catch (error) {
      toast.error("Unable to move to the trash");
    }
  };
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
      toast.success("Restored from the trash");
    } catch (error) {
      toast.error("Unable to restore from trash");
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
      toast.success("Note Deleted");
    } catch (error) {
      toast.error("Failed to delete the note");
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
        {pathname === "/home" && (
          <div
            className="bookmark-icon"
            onClick={() => toggleBookmarkHandler(noteCard)}
          >
            {noteCard.pinned ? (
              <i className="fas fa-bookmark"></i>
            ) : (
              <i className="far fa-bookmark"></i>
            )}
          </div>
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
              </div>
            ))}
        </div>

        <div className="note-card-footer">
          {pathname === "/home" && (
            <i
              className="fas fa-edit"
              title="Edit Note"
              onClick={() => {
                noteActionsDispatch({ type: SET_NOTE, payload: noteCard });
                setEditModal(true);
              }}
            ></i>
          )}
          {pathname !== "/trash" && pathname !== "/labels" &&
            (pathname === "/archives" ? (
              <i
                className="fas fa-arrow-alt-circle-up"
                title="Restore Archive Note"
                onClick={() => restoreFromArchivesHandler(noteCard)}
              ></i>
            ) : (
              <i
                className="fas fa-arrow-alt-circle-down"
                title="Archive Note"
                onClick={() => addToArchivesHandler(noteCard)}
              ></i>
            ))}

          {pathname === "/trash" && (
            <i
              className="fas fa-trash-restore"
              title="Restore Trashed Note"
              onClick={() => restoreFromTrashHandler(noteCard)}
            ></i>
          )}
          <i
            className="fas fa-trash-alt"
            title="Delete Note"
            onClick={() =>
              noteCard.inTrash && pathname === "/trash"
                ? deleteNoteHandler(noteCard)
                : pathname === "/archives"
                ? removeFromArchivesHandler(noteCard)
                : moveToTrashHandler(noteCard)
            }
          ></i>
        </div>
      </div>
    </div>
  );
};
export { NoteCard };
