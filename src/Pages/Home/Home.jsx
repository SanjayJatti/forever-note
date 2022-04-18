import React from "react";
import { useState } from "react";
import { NoteEditor } from "../../Components/NoteEditor/NoteEditor";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import { NotesContainer } from "../../Components/NotesContainer/NotesContainer";
import { Filters } from "../../Components/Filters/Filters";
import "./Home.css";
import {
  filterByPriority,
  sortByDate,
  composeFunction,
} from "../../Utils/FiltersFunc";
import { NoteCard } from "../../Components/NoteCard/NoteCard";
import { useFilters } from "../../Context/FiltersContext";

const Home = () => {
  const { filtersState } = useFilters();
  const [toggleBtn, setToggleBtn] = useState({
    showNoteEditor: false,
    showFilters: false,
  });
  const { showNoteEditor, showFilters } = toggleBtn;
  const { pinnedNotes, otherNotes } = useNotes();

  const notesData = composeFunction(sortByDate, filterByPriority)(
    filtersState,
    otherNotes
  );

  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        <div className="button-container">
          {!showNoteEditor ? (
            <button
              className="btn btn-outline-primary"
              onClick={() =>
                setToggleBtn({ ...toggleBtn, showNoteEditor: true })
              }
            >
              <h3>
                Create New Note
                <i className="fas fa-plus-circle font-inherit margin-l-xs"></i>
              </h3>
            </button>
          ) : (
            <NoteEditor setToggleBtn={setToggleBtn} toggleBtn={toggleBtn} showNoteEditor={showNoteEditor} />
          )}
          {!showNoteEditor && (
            <button
              className="btn btn-secondary"
              onClick={() => setToggleBtn({ ...toggleBtn, showFilters: !toggleBtn.showFilters })}
            >
              Filters
            </button>
          )}
        </div>
        {showFilters && <Filters />}
        <div className="margin-t-md">
          {pinnedNotes.length !== 0 && (
            <div className="margin-t-md">
              {otherNotes.length !== 0 && (
                <h4 className="text-primary">PINNED NOTES</h4>
              )}
              <NotesContainer notes={pinnedNotes} />
            </div>
          )}
          {otherNotes.length !== 0 && (
            <div className="margin-t-md">
              {pinnedNotes.length !== 0 && (
                <h4 className="text-primary">OTHER NOTES</h4>
              )}
              <div className="note-card-container margin-t-md">
                {notesData.map((noteCard) => (
                  <NoteCard key={noteCard._id} noteCard={noteCard} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export { Home };
