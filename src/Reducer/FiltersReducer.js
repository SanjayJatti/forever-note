
import { CLEAR, FILTER_BY_PRIORITY } from "../Constants/FiltersConstants";

const FiltersReducer = (state, action) => {
  switch (action.type) {

    case FILTER_BY_PRIORITY: {
      return { ...state, filterByPriority: action.payload };
    }
    case CLEAR: {
      return { ...state, sortByDate: undefined, filterByPriority: undefined };
    }
    default:
    return state
  }
};

export { FiltersReducer }