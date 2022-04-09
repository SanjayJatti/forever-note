import React from "react";
import { ReactQuillEditor } from "../ReactQuillEditor/ReactQuillEditor";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useNotes } from "../../Context/NotesContext";
import "./NoteEditor.css";
import { SET_NOTES } from "../../Constants/NotesConstant";

const NoteEditor = ({ setShowNoteEditor }) => {
  const [note, setNote] = useState({
    title : "",
    description : ""
  });
  const { authState} =useAuth();
  const { token } = authState;
  const {  notesDispatch } = useNotes();

  const noteSaveHandler = async()=>{
    try{
      const response = await axios.post("api/notes",{
        note
      },
      {
        headers: {authorization: token}
      })
      notesDispatch({
        type: SET_NOTES,
        payload: response.data.notes
      });
      setShowNoteEditor(false)
    }
    catch(error){
       console.log(error)
    }
  }
  return (
    <>
      <div className="note-editor-container">
        <h2>Create New Note</h2>
        <input
          type="text"
          placeholder="Title of Note"
          className="title-input"
          onChange={(e) =>setNote({...note, title: e.target.value})}
        />
        <ReactQuillEditor note={note} setNote={setNote} />
        <div className="flex-row gap-md">
          <button 
          className="btn btn-primary"
          onClick={noteSaveHandler}>Add Note</button>
          <button
            className="btn btn-outline-primary"
            onClick={()=>setShowNoteEditor(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
export { NoteEditor };
