import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { useNotes } from "../../Context/NotesContext";
import { NoteCard } from "../../Components/NoteCard/NoteCard.jsx";

const Trash = () => {
  const { noteActionsState } = useNoteActions();
  const { notesState } = useNotes();
  const { inTrash } = noteActionsState;
  const { notes } = notesState;
  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        <div className="note-card-container">
          {notes.map(
            (noteCard) => noteCard.inTrash && <NoteCard noteCard={noteCard} />
          )}
        </div>
      </div>
    </>
  );
};
export { Trash };
