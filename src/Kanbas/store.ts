import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Courses/Assignments/Reducer";
import enrollmentReducer from "./Dashboard/reducer";
// export interface KanbasState {
//   modulesReducer: {
//     modules: any[];
//     module: any;
//   };
//   assignmentsReducer: {
//     assignments: any[];
//     assignment: any;
//   };
// }
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    // assignmentReducer,
    assignments: assignmentReducer,
    enrollmentReducer,
  }
});

export default store;