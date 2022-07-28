import React from "react";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import { NoteCard } from "../../Components/NoteCard/NoteCard.jsx";

const Trash = () => {
  const { notesState } = useNotes();
  const { notes } = notesState;
  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        <div className="note-card-container">
          {notes.map(
            (noteCard, index) =>
              noteCard.inTrash && <NoteCard noteCard={noteCard} key={index} />
          )}
        </div>
      </div>
    </>
  );
};
export { Trash };
