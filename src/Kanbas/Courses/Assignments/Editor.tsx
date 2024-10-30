// import { useParams, Link } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";
// import React from "react";
// import * as db from "../../Database";



// export default function AssignmentEditor() {
//   const { cid, aid } = useParams(); // Get course and assignment ID from URL
//   const assignment = db.assignments.find((a) => a._id === aid && a.course === cid); // Find the selected assignment
 
//   return (
//     <div className="container my-4">


//       <form>
//         <div className="mb-3">
//           <label htmlFor="wd-name" className="form-label">Assignment Name</label>
//           <input id="wd-name" className="form-control" defaultValue={assignment?.title || "Assignment Title"} />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="wd-description" className="form-label">Description</label>
//           <textarea
//             id="wd-description"
//             className="form-control"
//             rows={4}
//             defaultValue={assignment?.description || "Assignment description"}
//           />
//         </div>

//         <div className="row mb-3 align-items-center">
//           <label htmlFor="wd-points" className="col-md-4 col-form-label">Points</label>
//           <div className="col-md-8">
//             <input id="wd-points" className="form-control" defaultValue={assignment?.points || ""} />
//           </div>
//         </div>

//         <div className="row mb-3 align-items-center">
//           <label htmlFor="wd-group" className="col-md-4 col-form-label">Assignment Group</label>
//           <div className="col-md-8">
//             <select id="wd-group" className="form-select">
//               <option value="Quizzes">QUIZZES</option>
//               <option value="Exams">EXAMS</option>
//               <option value="Projects">PROJECT</option>
//               <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//           </div>
//         </div>

//         <div className="row mb-3 align-items-center">
//           <label htmlFor="wd-display-grade-as" className="col-md-4 col-form-label">Display Grade As</label>
//           <div className="col-md-8">
//             <select id="wd-display-grade-as" className="form-select">
//               <option value="Points">Points</option>
//               <option selected value="Percentage">Percentage</option>
//             </select>
//           </div>
//         </div>


//           {/* Submission Type Section */}
//           <div className="row mb-3">
//           <h6 className="col-md-4 col-form-label">Submission Type</h6>
//           <div className="col-md-8">
//             <div className="border p-3 mb-3" style={{ borderRadius: '5px' }}>
//               <select id="wd-submission-type" className="form-select mb-3">
//                 <option value="OnPaper">On Paper</option>
//                 <option selected value="Online">Online</option>
//               </select>

//               <label className="form-label"><b>Online Entry Options</b></label>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="wd-text-entry" />
//                 <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
//               </div>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked/>
//                 <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
//               </div>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
//                 <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
//               </div>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
//                 <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
//               </div>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="wd-file-upload" />
//                 <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assign Section */}
//         <div className="row mb-3">
//           <h6 className="col-md-4 col-form-label">Assign</h6>
//           <div className="col-md-8">
//             <div className="border p-3 mb-3" style={{ borderRadius: '5px' }}>
//               <div className="mb-3">
//                 <label htmlFor="wd-assign-to" className="form-label"><b>Assign To</b></label>
//                 <div className="border p-2 rounded">
//                   <div className="d-flex align-items-center">
//                     <button type="button" className="btn btn-light me-2">
//                       Everyone <RxCross2 />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="wd-due-date" className="form-label "><b>Due</b></label>
//                 <div className="col-md-8">
//                   <input
//                     type="text"
//                     id="wd-due-date"
//                     className="form-control"
//                     defaultValue={assignment?.due || "Due date"}
//                   />
//                 </div>
//               </div>

//               <div className="row">
//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="wd-available-from" className="form-label">
//                     <b>Available From</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="wd-available-from"
//                     className="form-control"
//                     defaultValue={assignment?.availability || "Available date"}
//                   />
//                 </div>

//                 <div className="mb-3 col-md-6">
//                   <label htmlFor="wd-available-until" className="form-label">
//                     <b>Until</b>
//                   </label>
//                   <input
//                     type="text"
//                     id="wd-available-until"
//                     className="form-control"
//                     defaultValue={assignment?.due || "Until date"}
//                   />
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>

   
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
//             Cancel
//           </Link>
//           <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-primary btn-danger">
//             Save
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// }

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

import { RxCross2 } from "react-icons/rx";
import React, { useEffect } from "react";
import * as db from "../../Database";

import {
    addAssignment,
    deleteAssignment,
    updateAssignment,
    setAssignment,
    cancelAssignmentUpdate
} from "./assignmentsReducer";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { KanbasState } from "../../store";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewAssignment = !assignmentId || assignmentId.trim() === '';
  const assignmentList = useSelector((state: KanbasState) =>
      state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) =>
      state.assignmentsReducer.assignment);
  useEffect(() => {
      const assignmentData = assignmentList.find(a => a._id === assignmentId);
      if (assignmentData) {
          dispatch(setAssignment(assignmentData));
          console.log("Hello");
      } else {
          dispatch(cancelAssignmentUpdate(assignment));
      }
  }, [dispatch, assignmentId]);
  const handleSave = () => {
      if (isNewAssignment) {
          const newAssignment = { ...assignment, _id: new Date().getTime().toString(), course: courseId };
          console.log(newAssignment);
          dispatch(updateAssignment(newAssignment));
          dispatch(addAssignment(newAssignment));
      } else {
          dispatch(updateAssignment(assignment));
      }
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
      dispatch(cancelAssignmentUpdate(assignment))
      navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
      <div>
          <h2>Assignment Name</h2>
          <input value={assignment?.name}
              onChange={(e: { target: { value: any; }; }) => dispatch(setAssignment({ ...assignment, name: e.target.value }))}
              className="form-control mb-2" />
          <br />
          <textarea value={assignment?.description} className="form-control" cols={50} rows={5}
              onChange={(e) => dispatch(setAssignment({ ...assignment, description: e.target.value }))}></textarea>
          <br />
          <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Points
              </div>
              <div className="col-sm-6 col-md-8 w-50">
                  <input
                      className="form-control"
                      type="number"
                      placeholder="Points"
                      aria-label="default input example"
                      value={assignment?.points}
                      onChange={(e) => dispatch(setAssignment({ ...assignment, points: e.target.value }))}
                  />
              </div>
          </div>
          <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Assignment Group
              </div>
              <div className="col-sm-6 col-md-8 w-50">
                  <select className="form-control form-select">
                      <option>ASSIGNMENTS</option>
                  </select>
              </div>
          </div>
          <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Display Grade as
              </div>
              <div className="col-sm-6 col-md-8 w-50">
                  <select className="form-control form-select">
                      <option>Percentage</option>
                      <option>Decimal</option>
                      <option>Percentile</option>
                  </select>
              </div>
          </div>
          <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
              </div>
              <div className="col-sm-6 col-md-8" style={{ textAlign: "start" }}>
                  <input type="checkbox" />
                  Do not count this assignment towards the final grade
              </div>
          </div>
          <div className="row g-0 text-end" style={{ paddingBottom: "15px" }}>
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Submission Type
              </div>
              <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <div
                      className="wd-group"
                      style={{ border: "0.5px solid black", borderRadius: "1%", padding: "10px" }}
                  >
                      <select className="form-control">
                          <option>Online</option>
                          <option>In-Person</option>
                      </select>
                      <br />
                      <b>Online Entry Options</b>
                      <br />
                      <input type="checkbox" checked id="textEntry" />
                      <label>Text Entry</label> <br />
                      <input type="checkbox" checked /> Website URL <br />
                      <label><input type="checkbox" checked /> Media recordings </label><br />
                      <input type="checkbox" /> Student Annotation <br />
                      <input type="checkbox" checked /> File Uploads <br />
                      <input type="checkbox" /> Restrict Upload File Types <br />
                      <br />
                  </div>
              </div>
          </div>
          <div className="row g-0 text-end">
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Assign
              </div>
              <div className="col-sm-6 col-md-8 w-50" style={{ textAlign: "start" }}>
                  <div
                      className="wd-group"
                      style={{ border: "0.5px solid black", borderRadius: "1%", padding: "10px" }}
                  >
                      <b>Assign to</b>
                      <input
                          className="form-control"
                          type="text"
                          placeholder="Choose"
                          value="Everyone"
                          aria-label="default input example"
                      />
                      <br />
                      <b>Due</b>
                      <input className="form-control" type="datetime-local" value={assignment?.dueDateTime}
                          onChange={(e) => dispatch(setAssignment({ ...assignment, dueDateTime: e.target.value }))} />

                      <br />
                      <div
                          className="wd-flex-row-container"
                          style={{ width: "-webkit-fill-available", justifyContent: "space-around" }}
                      >
                          <div className="row" >
                              <div className="col">
                                  <b>Available from </b>

                              </div>
                              <div className="col"><b>Until </b>

                              </div>


                          </div>

                          <div className="row">
                              <div className="col">
                                  <input className="form-control w-75" type="datetime-local" value={assignment?.availableFromDate}
                                      onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))} />
                              </div>
                              <div className="col">
                                  <input className="form-control w-75" type="datetime-local" value={assignment?.availableUntilDate}
                                      onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))} />
                              </div>

                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div style={{ marginLeft: "10px" }}>
              <div className="d-flex justify-content-between" style={{ paddingTop: "15px" }}>
                  <span style={{ marginLeft: "20px", paddingTop: "15px" }}>
                      <input type="checkbox" />
                      Notify users that this content has changed
                  </span>
                  <span>
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                          onClick={() => dispatch(cancelAssignmentUpdate(assignment))}
                          className="btn" style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}>
                          Cancel
                      </Link>
                      <button onClick={handleSave} className="btn btn-danger" style={{ marginRight: "5px" }}>
                          Save
                      </button>
                  </span>
              </div>

              <hr style={{ marginLeft: "10px" }} />
          </div>
      </div>
  );
}

export default AssignmentEditor