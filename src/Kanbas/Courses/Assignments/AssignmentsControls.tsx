// import { FaSearch } from "react-icons/fa";

// export default function AssignmentsControl(){
//     return(
//         <div className="d-flex justify-content-between mb-4">
//         <div className="input-group w-50">
//           <span className="input-group-text bg-light">
//             <FaSearch />
//           </span>
//           <input
//             type="text"
//             className="form-control"
//             id="wd-search-assignment"
//             placeholder="Search..."
//           />
//         </div>
//         <div>
//           <button className="btn wd-add-assignment-group btn-secondary me-2">+ Group</button>
//           <button className="btn wd-add-assignment btn-danger">+ Assignment</button>
//         </div>
//       </div>
//     );
// }


////////////////////////////////////////////////////////
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addAssignment } from "./reducer";

export default function AssignmentsControl({ assignmentName, setAssignmentName, addAssignment}:
  { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {
  const dispatch = useDispatch();
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
          // Optional: onChange to filter assignments based on input
          onChange={(e) => {
            const searchTerm = e.target.value;
            // Dispatch search/filter action or update local state
          }}
        />
      </div>
      <div>
        <button className="btn wd-add-assignment-group btn-secondary me-2">
          + Group
        </button>
        <button id="wd-add-assignment-btn" className="btn wd-add-assignment btn-danger" onClick={addAssignment}>
          + Assignment
        </button>
      </div>


    </div>
  );
}

