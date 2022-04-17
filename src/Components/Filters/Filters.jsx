import {
  FILTER_BY_PRIORITY,
  SORT_BY_DATE,
  CLEAR,
} from "../../Constants/FiltersConstants";
import { useFilters } from "../../Context/FiltersContext";
import "./Filters.css";

const Filters = () => {
  const { filtersState, filtersDispatch } = useFilters();
  const { sortByDate, filterByPriority } = filtersState;
  return (
    <div className="note-filters-Container">
      <h5>Sort By Date</h5>
      <div className="input-radio">
        <input
          type="radio"
          id="SORT_NEW_TO_OLD"
          name="sortByDate"
          checked={sortByDate === "SORT_NEW_TO_OLD"}
          onChange={() =>
            filtersDispatch({
              type: SORT_BY_DATE,
              payload: "SORT_NEW_TO_OLD",
            })
          }
        />
        <label htmlFor="SORT_NEW_TO_OLD">New to Old</label>
      </div>
      <div className="input-radio">
        <input
          type="radio"
          id="SORT_OLD_TO_NEW"
          name="sortByDate"
          checked={sortByDate === "SORT_OLD_TO_NEW"}
          onChange={() =>
            filtersDispatch({
              type: SORT_BY_DATE,
              payload: "SORT_OLD_TO_NEW",
            })
          }
        />
        <label htmlFor="SORT_OLD_TO_NEW">Old to New</label>
      </div>
      <h5>Filter By Priority</h5>
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
