import {
  SET_TITLE,
  SET_NOTE,
  TOGGLE_TRASH,
  SET_LABELS,
  SET_COLOR,
  SET_PRIORITY,
  TOGGLE_PINNED,
  RESET,
} from "../Constants/NoteActionsConstants";

export const NoteActionsReducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE: {
      return { ...state, title: action.payload };
    }
    case SET_NOTE: {
      return action.payload;
    }
    case TOGGLE_TRASH: {
      return { ...state, inTrash: !state.inTrash };
    }
    case SET_LABELS: {
      return {
        ...state,
        labels: state.labels.includes(action.payload)
          ? [state.labels.filter((item) => item !== action.payload)]
          : [...state.labels, action.payload],
      };
    }
    case SET_COLOR: {
      return { ...state, color: action.payload };
    }
    case SET_PRIORITY: {
      return { ...state, priority: action.payload };
    }
    case TOGGLE_PINNED: {
      return { ...state, pinned: !state.pinned };
    }
    case RESET:
    default: {
      return {
        inTrash: false,
        labels: [],
        color: "",
        priority: "",
        pinned: false,
      };
    }
  }
};
