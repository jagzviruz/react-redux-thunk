const tableDataReducer = (
  state = {
    dataLoaded: false,
    fetching: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        fetching: true
      };

    case "FETCHED_DATA":
      return {
        data: action.data,
        dataLoaded: true,
        fetching: false
      };

    case "PURGE_DATA":
      return {
        data: [],
        fetching: false,
        dataLoaded: false
      };

    default:
      return state;
  }
};

export default tableDataReducer;
