
import { CLEAR, SORT_BY_DATE, FILTER_BY_PRIORITY } from "../Constants/FiltersConstants";

const FiltersReducer = (state, action) => {
  switch (action.type) {
    case SORT_BY_DATE: {
      return { ...state, sortByDate: action.payload };
    }
    case FILTER_BY_PRIORITY: {
      return { ...state, filterByPriority: action.payload };
    }
    case CLEAR: {
      return { ...state, sortByDate: undefined, filterByPriority: undefined };
    }
  }
};

export { FiltersReducer }