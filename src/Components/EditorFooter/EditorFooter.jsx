import { useState } from "react";
import {
  SET_COLOR,
  SET_LABELS,
  SET_PRIORITY,
} from "../../Constants/NoteActionsConstants";
import { useNoteActions } from "../../Context/NoteActionsContext";
import { NoteCard } from "../NoteCard/NoteCard";
import "./EditorFooter.css";

const EditorFooter = ({ noteCard }) => {
  const [toggle, setToggle] = useState({
    palletColors: false,
    priority: false,
    labels: false,
  });
  const [newLabel, setNewLabel] = useState("");
  const [uniqueLabels, setUniqueLabels] = useState([]);
  const { noteActionsState, noteActionsDispatch } = useNoteActions();
  const colorPallet = ["bg-primary", "bg-danger", "bg-success", "bg-warning"];
  const priorityList = ["High", "Medium", "Low"];

  return (
    <div className="editor-footer flex-row">
      <button
        className="editor-btn"
        title="Choose Colors"
        onClick={() =>
          setToggle({ ...toggle, palletColors: !toggle.palletColors })
        }
      >
        <i className="fas fa-palette"></i>
      </button>
      {toggle.palletColors && (
        <div className="dropdown pallet-position flex-center">
          {colorPallet.map((bgColor, index) => {
            return (
              <button
                className={`color-btn  ${bgColor}`}
                key={index}
                onClick={() => {
                  noteActionsDispatch({ type: SET_COLOR, payload: bgColor });
                  setToggle({ ...toggle, palletColors: !toggle.palletColors });
                }}
              ></button>
            );
          })}
        </div>
      )}
      <button
        className="editor-btn"
        title="Set Priority"
        onClick={() => setToggle({ ...toggle, priority: !toggle.priority })}
      >
        <i className="fas fa-sort"></i>
      </button>
      {toggle.priority && (
        <div className="dropdown priority-position flex-column">
          {priorityList.map((priorityValue, index) => {
            return (
              <div className="input-radio">
                <input
                  type="radio"
                  id={priorityValue}
                  name="priority value"
                  onChange={() =>
                    noteActionsDispatch({
                      type: SET_PRIORITY,
                      payload: priorityValue,
                    })
                  }
                />
                <label htmlFor={priorityValue} key={index} name="priority">
                  {priorityValue}
                </label>
              </div>
            );
          })}
        </div>
      )}
      <button
        className="editor-btn"
        title="Add Labels"
        onClick={() => setToggle({ ...toggle, labels: !toggle.labels })}
      >
        <i className="fas fa-tags"></i>
      </button>
      {toggle.labels && (
        <div className="dropdown labels-position">
          <div className="add-label-wrapper">
            <input
              type="text"
              name="add-label"
              id="add-label"
              onChange={(e) => setNewLabel(e.target.value)}
            />
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (
                  !uniqueLabels.find((labelItem) => labelItem === newLabel) &&
                  newLabel !== ""
                ) {
                  setUniqueLabels([...uniqueLabels, newLabel]);
                }
                setNewLabel("");
              }}
            >
              Add
            </button>
          </div>
          <div className="labels-checkbox-wrapper">
            {uniqueLabels.length !== 0 &&
              uniqueLabels.map((tag, index) => (
                <div className="label-checkbox">
                  <input
                    type="checkbox"
                    name="labels"
                    id={tag}
                    checked={noteActionsState.labels.includes(tag)}
                    onChange={() =>
                      noteActionsDispatch({ type: SET_LABELS, payload: tag })
                    }
                  />
                  <label key={index} htmlFor={tag}>
                    {tag}
                  </label>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export { EditorFooter };