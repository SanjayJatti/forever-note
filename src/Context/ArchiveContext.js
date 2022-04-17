import { createContext, useContext, useReducer, useEffect } from "react";
import { SET_ARCHIVES } from "../Constants/ArchiveConstants";
import { ArchiveReducer } from "../Reducer/ArchiveReducer";
import { useAuth } from "./AuthContext";
import axios from "axios"

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) =>{
    const [archiveState, archiveDispatch] = useReducer(ArchiveReducer, { archives : []})
    const { authState } = useAuth()
    const { token } = authState;

    useEffect(() => {
        if (token) {
          (async () => {
            try {
              const response = await axios.get("/api/archives", {
                headers: { authorization: token },
              });
              archiveDispatch({
                type: SET_ARCHIVES,
                payload: response.data.archives,
              });
            } catch (error) {
              console.log(error);
            }
          })();
        } else {
          archiveDispatch({ type: SET_ARCHIVES, payload: [] });
        }
      }, [token]);

    return (
        <ArchiveContext.Provider value={{archiveState, archiveDispatch}}>
            { children }
        </ArchiveContext.Provider>
    )
}

const useArchive = ()=> useContext(ArchiveContext);

export { ArchiveProvider, useArchive }