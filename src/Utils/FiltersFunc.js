const sortByDate = (state, data) => {
  if (state.sortByDate && state.sortByDate === "SORT_NEW_TO_OLD") {
    return data.sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  } else if (state.sortByDate && state.sortByDate === "SORT_OLD_TO_NEW") {
    return data.sort(
      (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
    );
  }
  return data;
};

const filterByPriority = (state, data) => {
  if (state.filterByPriority && state.filterByPriority === "HIGH") {
    return data.filter((note) => note.priority === "High");
  }
  if (state.filterByPriority && state.filterByPriority === "MEDIUM") {
    return data.filter((note) => note.priority === "Medium");
  }
  if (state.filterByPriority && state.filterByPriority === "LOW") {
    return data.filter((note) => note.priority === "Low");
  }
  return data;
};
const composeFunction =
  (...args) =>
  (state, data) =>
    args.reduce((accumulator, current) => current(state, accumulator), data);

export { composeFunction, filterByPriority, sortByDate };
