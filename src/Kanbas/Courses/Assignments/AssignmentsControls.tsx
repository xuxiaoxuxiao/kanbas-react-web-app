// // import { FaSearch } from "react-icons/fa";

// // export default function AssignmentsControl(){
// //     return(
// //         <div className="d-flex justify-content-between mb-4">
// //         <div className="input-group w-50">
// //           <span className="input-group-text bg-light">
// //             <FaSearch />
// //           </span>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="wd-search-assignment"
// //             placeholder="Search..."
// //           />
// //         </div>
// //         <div>
// //           <button className="btn wd-add-assignment-group btn-secondary me-2">+ Group</button>
// //           <button className="btn wd-add-assignment btn-danger">+ Assignment</button>
// //         </div>
// //       </div>
// //     );
// // }


// ////////////////////////////////////////////////////////
// // import { FaSearch } from "react-icons/fa";
// // import { useDispatch } from "react-redux";
// // import { addAssignment } from "./reducer";
// // import { useNavigate } from "react-router-dom";

// // export default function AssignmentsControl({ assignmentName, setAssignmentName, addAssignment}:
// //   { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();
// //   return (
// //     <div className="d-flex justify-content-between mb-4">
// //       <div className="input-group w-50">
// //         <span className="input-group-text bg-light">
// //           <FaSearch />
// //         </span>
// //         <input
// //           type="text"
// //           className="form-control"
// //           id="wd-search-assignment"
// //           placeholder="Search..."
// //           // Optional: onChange to filter assignments based on input
// //           onChange={(e) => {
// //             const searchTerm = e.target.value;
// //             // Dispatch search/filter action or update local state
// //           }}
// //         />
// //       </div>
// //       <div>
// //         <button className="btn wd-add-assignment-group btn-secondary me-2">
// //           + Group
// //         </button>
// //         <button id="wd-add-assignment-btn" className="btn wd-add-assignment btn-danger" onClick={() => navigate("/Kanbas/Courses/AssignmentEditor")}>
// //           + Assignment
// //         </button>
// //       </div>


// //     </div>
// //   );
// // }
// import { FaSearch } from "react-icons/fa";
// import { useNavigate, useParams } from "react-router-dom";

// export default function AssignmentsControls({
//   cid,
//   assignmentName,
//   setAssignmentName,
//   addAssignment,
//   }: {
//   cid: string;
//   assignmentName: string;
//   setAssignmentName: (title: string) => void;
//   addAssignment: () => void;
//   }) {
//   const navigate = useNavigate();
//   return (
//     <div className="d-flex justify-content-between mb-4">
//       <div className="input-group w-50">
//         <span className="input-group-text bg-light">
//           <FaSearch />
//         </span>
//         <input
//           type="text"
//           className="form-control"
//           id="wd-search-assignment"
//           placeholder="Search..."
//           onChange={(e) => setAssignmentName(e.target.value)}
//         />
//       </div>
//       <div>
//         <button className="btn wd-add-assignment-group btn-secondary me-2">
//           + Group
//         </button>
//         <button 
//           id="wd-add-assignment-btn"
//           className="btn wd-add-assignment btn-danger"
//           onClick={() => navigate(`/Kanbas/Courses/${cid}/AssignmentEditor`)} // Fixed the route
//         >
//           + Assignment
//         </button>
//       </div>
//     </div>
//   );
// }
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AssignmentsControls({
  cid,
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  cid: string;
  assignmentName: string;
  setAssignmentName: (title: string) => void;
  addAssignment: (assignmentData: any) => void; // Adjusted to accept assignment data
}) {
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    // Assuming the function `addAssignment` will handle the creation logic
    const newAssignmentData = {
      title: assignmentName,
      // You can add other default values here if needed
    };
    
    addAssignment(newAssignmentData);
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Navigate back to Assignments after adding
  };

  return (
    <div className="d-flex justify-content-between mb-4">
      <div className="input-group w-50">
        <span className="input-group-text bg-light">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          id="wd-search-assignment"
          placeholder="Search..."
          onChange={(e) => setAssignmentName(e.target.value)}
        />
      </div>
      <div>
        <button className="btn wd-add-assignment-group btn-secondary me-2">
          + Group
        </button>
        <button 
          id="wd-add-assignment-btn"
          className="btn wd-add-assignment btn-danger"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/AssignmentEditor`)}  // Updated to handle add assignment logic
        >
          + Assignment
        </button>
      </div>
    </div>
  );
}
