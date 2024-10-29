// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// const initialState = {
//   assignments: assignments,
// };
// const assignmentsSlice = createSlice({
//   name:"assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment: any = {
//         _id: new Date().getTime().toString(),
//         lessons: [],
//         name: assignment.name,
//         course: assignment.course,
//       };
//     //   state.assignments = [...state.assignments, newAssignment] as any;
//       state.assignments.push(newAssignment); // Push directly to the array
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (m: any) => m._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignment._id ? assignment : m
//       ) as any;
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((m: any) =>
//         m._id === assignmentId ? { ...m, editing: true } : m    
//         ) as any;
//     },
//   },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
// assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

// function newFunction(): "assignments" {
//     return "assignments";
// }

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  due: string;
  points: string;
  availability: string;
  description: string;
}

const initialState = {
  assignments: assignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: Assignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        due: assignment.due,
        points: assignment.points,
        availability: assignment.availability,
        description: assignment.description,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: Assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((existingAssignment: Assignment) =>
        existingAssignment._id === assignment._id
          ? { ...existingAssignment, ...assignment }
          : existingAssignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
