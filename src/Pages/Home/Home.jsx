import React from "react";
import { useState } from "react";
import { NoteCard } from "../../Components/NoteCard/NoteCard";
import { NoteEditor } from "../../Components/NoteEditor/NoteEditor";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import "./Home.css";

const Home = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const { notesState } = useNotes();
  const { notes } = notesState;

  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        {!showNoteEditor ? (
          <button
            className="btn btn-outline-primary"
            onClick={() => setShowNoteEditor(true)}
          >
            <h3>
              Create New Note
              <i className="fas fa-plus-circle font-inherit margin-l-xs"></i>
            </h3>
          </button>
        ) : (
          <NoteEditor setShowNoteEditor={setShowNoteEditor} />
        )}
        <div>
          {notes.map((noteCard) => (
            <div className="note-card-container">
              <NoteCard noteCard={noteCard} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export { Home };
