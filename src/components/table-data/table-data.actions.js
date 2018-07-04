import axios from "axios";

export const tableLoaded = () => ({
  type: "TABLE_LOADED"
});

const dummyPromise = () =>
  Promise.resolve({
    data: [{ id: 1, name: "blah" }, { id: 2, name: "blah 2" }]
  });

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchingData);
    // return axios.get("https://api.github.com/search/users").then(response => {
    //   dispatch(fetchedRemoteData(response.data));
    // });
    return dummyPromise().then(response => {
      dispatch(fetchedRemoteData(response.data));
    });
  };
};

export const fetchingData = () => ({
  type: "FETCHING_DATA"
});

export const fetchedRemoteData = data => ({
  type: "FETCHED_DATA",
  data
});

export const purgeData = () => ({
  type: "PURGE_DATA"
});
