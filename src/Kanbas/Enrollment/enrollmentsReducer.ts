// reducer.js
const initialState = {
  enrollments: [],
};

const enrollmentReducer = (state = initialState, action: { type: any; payload: { user: any; course: any; }; }) => {
  switch (action.type) {
    case 'ENROLL_COURSE':
      return {
        ...state,
        enrollments: [...state.enrollments, action.payload],
      };
    case 'UNENROLL_COURSE':
      return {
        ...state,
        enrollments: state.enrollments.filter(
          (enrollment) => !(enrollment === action.payload.user && enrollment === action.payload.course)
        ),
      };
    default:
      return state;
  }
};

export default enrollmentReducer;
export function enrollCourse(enrollment: { user: any; course: any; }): any {
  throw new Error("Function not implemented.");
}

