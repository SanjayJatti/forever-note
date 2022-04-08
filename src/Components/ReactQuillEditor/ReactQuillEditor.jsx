import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import "./ReactQuillEditor.css";

const ReactQuillEditor = ({ note, setNote }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["code-block", "code"],
    ],
  };
  return (
    <ReactQuill
      modules={modules}
      value={note.description}
      onChange={(value)=>setNote({...note, description: value})}
      placeholder="Write a note..."
    ></ReactQuill>
  );
};
export { ReactQuillEditor };
