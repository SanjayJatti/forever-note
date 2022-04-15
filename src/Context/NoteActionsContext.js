import { createContext, useContext, useReducer } from "react";
import { NoteActionsReducer } from "../Reducer/NoteActionsReducer";

const NoteActionsContext = createContext();

const NoteActionsProvider = ({ children }) => {
  const initialState = {
    title: "",
    inTrash: false,
    labels: [],
    color: "",
    priority: "",
    pinned: false,
  };

  const [noteActionsState, noteActionsDispatch] = useReducer(
    NoteActionsReducer,
    initialState
  );
  return (
    <NoteActionsContext.Provider
      value={{ noteActionsState, noteActionsDispatch }}
    >
      {children}
    </NoteActionsContext.Provider>
  );
};

const useNoteActions = () => useContext(NoteActionsContext);

export { NoteActionsProvider, useNoteActions };
