import { SET_ARCHIVES } from "../Constants/ArchiveConstants";

const ArchiveReducer = ( state, action ) =>{
    switch (action.type) {
        case SET_ARCHIVES: {
          return { ...state, archives: action.payload };
        }
        default:
          return state;
      }
}
export { ArchiveReducer }