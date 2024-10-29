import { useParams, Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import React from "react";
import * as db from "../../Database";



export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get course and assignment ID from URL
  const assignment = db.assignments.find((a) => a._id === aid && a.course === cid); // Find the selected assignment
 
  return (
    <div className="container my-4">


      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" defaultValue={assignment?.title || "Assignment Title"} />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={4}
            defaultValue={assignment?.description || "Assignment description"}
          />
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="wd-points" className="col-md-4 col-form-label">Points</label>
          <div className="col-md-8">
            <input id="wd-points" className="form-control" defaultValue={assignment?.points || ""} />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="wd-group" className="col-md-4 col-form-label">Assignment Group</label>
          <div className="col-md-8">
            <select id="wd-group" className="form-select">
              <option value="Quizzes">QUIZZES</option>
              <option value="Exams">EXAMS</option>
              <option value="Projects">PROJECT</option>
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="wd-display-grade-as" className="col-md-4 col-form-label">Display Grade As</label>
          <div className="col-md-8">
            <select id="wd-display-grade-as" className="form-select">
              <option value="Points">Points</option>
              <option selected value="Percentage">Percentage</option>
            </select>
          </div>
        </div>


          {/* Submission Type Section */}
          <div className="row mb-3">
          <h6 className="col-md-4 col-form-label">Submission Type</h6>
          <div className="col-md-8">
            <div className="border p-3 mb-3" style={{ borderRadius: '5px' }}>
              <select id="wd-submission-type" className="form-select mb-3">
                <option value="OnPaper">On Paper</option>
                <option selected value="Online">Online</option>
              </select>

              <label className="form-label"><b>Online Entry Options</b></label>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked/>
                <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>
        </div>

        {/* Assign Section */}
        <div className="row mb-3">
          <h6 className="col-md-4 col-form-label">Assign</h6>
          <div className="col-md-8">
            <div className="border p-3 mb-3" style={{ borderRadius: '5px' }}>
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="form-label"><b>Assign To</b></label>
                <div className="border p-2 rounded">
                  <div className="d-flex align-items-center">
                    <button type="button" className="btn btn-light me-2">
                      Everyone <RxCross2 />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="wd-due-date" className="form-label "><b>Due</b></label>
                <div className="col-md-8">
                  <input
                    type="text"
                    id="wd-due-date"
                    className="form-control"
                    defaultValue={assignment?.due || "Due date"}
                  />
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-md-6">
                  <label htmlFor="wd-available-from" className="form-label">
                    <b>Available From</b>
                  </label>
                  <input
                    type="text"
                    id="wd-available-from"
                    className="form-control"
                    defaultValue={assignment?.availability || "Available date"}
                  />
                </div>

                <div className="mb-3 col-md-6">
                  <label htmlFor="wd-available-until" className="form-label">
                    <b>Until</b>
                  </label>
                  <input
                    type="text"
                    id="wd-available-until"
                    className="form-control"
                    defaultValue={assignment?.due || "Until date"}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

   
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary btn-danger">
            Save
          </Link>
        </div>
      </form>
    </div>
  );
}

// 二选一 ⬆️显示全部assignmentinfo ⬇️显示空白

// import { useParams, Link } from "react-router-dom";
// import React, { useState } from "react";
// import { useDispatch } from "react-redux"; // Import useDispatch to use the Redux action

// import { addAssignment } from "../../Courses/Assignments/reducer"; // Import the addAssignment action

// export default function AssignmentEditor() {
//   const { cid } = useParams(); // Get course ID from URL
//   const dispatch = useDispatch(); // Initialize the dispatch function

//   // Local state for assignment form inputs
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [points, setPoints] = useState("");
//   const [due, setDue] = useState("");

//   const handleSave = () => {
//     const newAssignment = {
//       title,
//       description,
//       points,
//       due,
//       course: cid, // Associate the assignment with the course
//     };

//     // Dispatch the action to add the assignment
//     dispatch(addAssignment(newAssignment));
//   };

//   return (
//     <div className="container my-4">
//       <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
//         <div className="mb-3">
//           <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//           <input
//             id="wd-name"
//             className="form-control"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="wd-description" className="form-label">Description</label>
//           <textarea
//             id="wd-description"
//             className="form-control"
//             rows={4}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="wd-points" className="form-label">Points</label>
//           <input
//             id="wd-points"
//             className="form-control"
//             value={points}
//             onChange={(e) => setPoints(e.target.value)}
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="wd-due" className="form-label">Due Date</label>
//           <input
//             id="wd-due"
//             type="date"
//             className="form-control"
//             value={due}
//             onChange={(e) => setDue(e.target.value)}
//           />
//         </div>

//         <hr />
//         <div className="d-flex justify-content-end">
//           <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
//             Cancel
//           </Link>
//           <button type="submit" className="btn btn-primary btn-danger">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
