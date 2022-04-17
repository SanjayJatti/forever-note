import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext.js";
import { SET_NOTES } from "../Constants/NotesConstant.js";
import { NotesReducer } from "../Reducer/NotesReducer.js";


const notesContext = createContext();

const NotesProvider = ({children}) =>{
    const [ notesState, notesDispatch] = useReducer(NotesReducer, { notes : []})
    const { authState } = useAuth();
    const { token } = authState;

    const pinnedNotes = notesState.notes.filter((note) => note.pinned && !note.inTrash);
    const otherNotes = notesState.notes.filter((note) => !note.pinned && !note.inTrash);
     
    useEffect(() =>{
        const getNotes = async()=>{
            try{
                const response = await axios.get("api/notes",{
                    headers : {authorization : token}
                })
                notesDispatch({
                    type: SET_NOTES,
                    payload: response.data.notes
                })
            }
            catch(error){
                console.log(error)
            }
        }
        getNotes()
    },[token])
    
    return(
        <notesContext.Provider value={{notesState, notesDispatch, pinnedNotes, otherNotes}}>
            {children}
        </notesContext.Provider>
    )
}

const useNotes = ()=> useContext(notesContext);

export { useNotes, NotesProvider}