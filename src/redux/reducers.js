import { combineReducers } from "redux";
import authSlice from "./auth/authSlice";
import lemSlice from "./lem/lemSlice";
import dashboardSlice from "./dashboard/dashboardSlice";

const rootReducer = combineReducers({
  Auth: authSlice,
  Lem: lemSlice,
  Dashboard: dashboardSlice,
});

export default rootReducer;
