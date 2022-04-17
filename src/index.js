import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.js";
import { NotesProvider } from "./Context/NotesContext";
import { NoteActionsProvider } from "./Context/NoteActionsContext";
import { ArchiveProvider } from "./Context/ArchiveContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <NotesProvider>
          <ArchiveProvider>
            <NoteActionsProvider>
              <App />
            </NoteActionsProvider>
          </ArchiveProvider>
        </NotesProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
