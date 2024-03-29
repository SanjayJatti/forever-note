import { NoteCard } from "../../Components/NoteCard/NoteCard";
import { useArchive } from "../../Context/ArchiveContext";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

export const Archive = () => {
  const { archiveState } = useArchive();
  const { archives } = archiveState;
  return (
    <>
      <Sidebar />
      <div className="all-notes-container">
        {archives.length !== 0 ? (
          <div className="note-card-container">
            {archives.map((noteCard) => {
              return <NoteCard noteCard={noteCard} key={noteCard._id} />;
            })}
          </div>
        ) : (
          <h3>Add note to the archive</h3>
        )}
      </div>
    </>
  );
};
