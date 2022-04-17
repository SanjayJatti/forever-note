import React from "react";
import { useState } from "react";
import { NoteCard } from "../../Components/NoteCard/NoteCard";
import { NoteEditor } from "../../Components/NoteEditor/NoteEditor";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { useNotes } from "../../Context/NotesContext";
import { NotesContainer } from "../../Components/NotesContainer/NotesContainer";
import "./Home.css";

const Home = () => {
  const [showNoteEditor, setShowNoteEditor] = useState(false);
  const { notesState, pinnedNotes, otherNotes } = useNotes();
  const { noteActionsState } = useNoteActions();

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
          <div className="margin-t-md">
            {pinnedNotes.length !== 0 && (
              <div className="margin-t-md" >
                {otherNotes.length !== 0 && <h4 className="text-primary">PINNED NOTES</h4>}
                <NotesContainer notes={pinnedNotes} />
              </div>
            )}
            {otherNotes.length !== 0 && (
              <div className="margin-t-md">
                {pinnedNotes.length !== 0 && <h4 className="text-primary">OTHER NOTES</h4>}
                <NotesContainer notes={otherNotes} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export { Home };
