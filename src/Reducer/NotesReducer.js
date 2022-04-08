import { SET_NOTES } from "../Constants/NotesConstant";

const NotesReducer = (state, action) => {
  switch (action.type) {
    case SET_NOTES: {
      return { ...state, notes: action.payload };
    }
    default:
      return state;
  }
};
export { NotesReducer };
