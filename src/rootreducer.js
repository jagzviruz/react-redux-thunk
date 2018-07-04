import { combineReducers } from "redux";
import TableData from "./components/table-data/table-data.reducer";

const root = combineReducers({
  tableData: TableData
});

export default root;
