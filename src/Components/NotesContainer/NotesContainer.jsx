import { NoteCard } from "../NoteCard/NoteCard"

 const NotesContainer = ({notes}) => {
  return (
    <div className="note-card-container margin-t-md">
      {notes.map((noteCard) => (
        <NoteCard key={noteCard._id} noteCard={noteCard} />
      ))}
  </div>
  )
}
export { NotesContainer }
