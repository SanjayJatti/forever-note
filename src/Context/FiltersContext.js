
import { createContext, useContext, useReducer } from "react";
import { FiltersReducer } from "../Reducer/FiltersReducer"

const FiltersContext = createContext();

const FiltersProvider = ({ children }) => {
  const initialState = {
    sortByDate: "",
    filterByPriority: "",
  };

  const [filtersState, filtersDispatch] = useReducer(FiltersReducer, initialState);

  return (
    <FiltersContext.Provider value={{ filtersState, filtersDispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};

const useFilters = () => useContext(FiltersContext);
export { useFilters, FiltersProvider}
