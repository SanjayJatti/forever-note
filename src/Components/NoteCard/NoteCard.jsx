import React from "react";
import "./NoteCard.css"

const NoteCard = ({ noteCard }) => {
  return (
    <div className="note-card">
      <strong>{noteCard.title}</strong>
      <div
        className="note-description"
        dangerouslySetInnerHTML={{ __html: noteCard.description }}
      ></div>
    </div>
  );
};
export { NoteCard };
