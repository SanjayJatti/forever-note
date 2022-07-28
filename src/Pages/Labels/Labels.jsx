import { useNotes } from "../../Context/NotesContext";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { NoteCard } from "../../Components/NoteCard/NoteCard"
import { useState } from "react";
import "./Labels.css"

const Labels = () => {
  const [labeledNotes, setLabeledNotes] = useState([]);
  const { notesState } = useNotes();
  const { notes } = notesState;

  const removeNotesInTrash = (notesData) => {
    return notesData.filter((note) => note.inTrash === false);
  };
  const mainNotes = removeNotesInTrash(notes);

  const getTags = (notesData) => {
    return notesData.reduce((acc, curr) => {
      if (curr.labels.length > 0) {
        return [...acc, ...curr.labels.filter((label) => !acc.includes(label))];
      } else {
        return [...acc];
      }
    }, []);
  };
  const tags = getTags(mainNotes);
  const getLabeledNotes = (mainNotes, tagValue) => {
    setLabeledNotes(
      mainNotes.filter((note) => {
        return note.labels.includes(tagValue);
      })
    );
  };

  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        <div className="label-buttons-wrapper">
        {tags.length !== 0 ?
          tags.map((tagValue, index) => (
            <button
            className="btn btn-secondary"
              key={index}
              onClick={() => getLabeledNotes(mainNotes, tagValue)}
            >
              {tagValue}
            </button>
          )) : <h3>Add label to the note</h3>}
        </div>

        <div className="labeld-notes-wrapper">
          {labeledNotes.map((noteCard) => {
            return <NoteCard noteCard={noteCard} key={noteCard._id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export { Labels };
