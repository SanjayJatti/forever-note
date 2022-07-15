import {
  FILTER_BY_PRIORITY,
  CLEAR,
} from "../../Constants/FiltersConstants";
import { useFilters } from "../../Context/FiltersContext";
import "./Filters.css";

const Filters = () => {
  const { filtersState, filtersDispatch } = useFilters();
  const {  filterByPriority } = filtersState;
  return (
    <div className="note-filters-Container">
      <h4>Filter By Priority</h4>
      <div className="input-radio">
        <input
          type="radio"
          id="FILTER_BY_HIGH"
          name="FILTER_BY_HIGH"
          checked={filterByPriority === "HIGH"}
          onChange={() =>
            filtersDispatch({ type: FILTER_BY_PRIORITY, payload: "HIGH" })
          }
        />
        <label htmlFor="FILTER_BY_HIGH">High</label>
      </div>
      <div className="input-radio">
        <input
          type="radio"
          id="FILTER_BY_MEDIUM"
          name="FILTER_BY_MEDIUM"
          checked={filterByPriority === "MEDIUM"}
          onChange={() =>
            filtersDispatch({ type: FILTER_BY_PRIORITY, payload: "MEDIUM" })
          }
        />
        <label htmlFor="FILTER_BY_MEDIUM">Medium</label>
      </div>
      <div className="input-radio">
        <input
          type="radio"
          id="FILTER_BY_LOW"
          name="FILTER_BY_LOW"
          checked={filterByPriority === "LOW"}
          onChange={() =>
            filtersDispatch({ type: FILTER_BY_PRIORITY, payload: "LOW" })
          }
        />
        <label htmlFor="FILTER_BY_LOW">Low</label>
      </div>
      <button
        className="btn btn-outline-secondary"
        onClick={() => filtersDispatch({ type: CLEAR })}
      >
        Clear
      </button>
    </div>
  );
};
export { Filters };
