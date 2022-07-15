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

export { filterByPriority };
