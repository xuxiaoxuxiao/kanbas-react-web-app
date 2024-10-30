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


const initialState = {
    assignments: assignments,
    assignment: {
        name: "New Assignment",
        description: "New Description",
        points: 100,
        course: "hi",
        _id: "",
        dueDateTime: new Date().toISOString().slice(0, 16),
        availableFromDate: new Date().toISOString().slice(0, 16),
        availableUntilDate: new Date().toISOString().slice(0, 16)
    }
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        },
        cancelAssignmentUpdate: (state, action) => {
            state.assignment = initialState.assignment;
        },
    },
});


export const { addAssignment, deleteAssignment,
    updateAssignment, setAssignment, cancelAssignmentUpdate } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;