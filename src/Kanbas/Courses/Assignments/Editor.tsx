import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import {addAssignment, updateAssignment,} from "./Reducer";
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { KanbasState } from "../../store";

function AssignmentEditor() {
  const { courseId,assignmentId } = useParams();
  console.log("assignmentId:", assignmentId);
  console.log("courseId:", courseId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { assignments } = useSelector((state: any) => state.assignmentReducer || { assignments: [] });

  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === assignmentId 
  );

  // const existingAssignment = useSelector((state: any) => state.assignmentReducer.assignments.find(
  //     (assignment: { _id: string | undefined; }) => assignment._id === assignmentId
  //   )
  // );
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      title: "",
      description: "",
      points: 100,
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
      course: courseId,
    }
  );

  console.log("assignmentId:", assignmentId);
  console.log("existingAssignment:", existingAssignment);
  const handleSave = () => {
    if (existingAssignment) {
      saveAssignment(assignment);
    } else {
      createAssignment({ ...assignment, _id: new Date().getTime().toString() });
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const createAssignment = async (assignment: any) => {
    const newAssignment = await coursesClient.createAssignmentForCourse(
      courseId as string,
      assignment
    );
    dispatch(addAssignment(newAssignment));
  };
  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const location =useLocation();
  const readOnly = location.state?.readOnly || false;

  return (
    
      <div>
          <h2>Assignment Name</h2>
          
          <input value={assignment.title}
              onChange={(e) =>setAssignment({ ...assignment, title: e.target.value })}
              className="form-control mb-2" />
          <br />
          <textarea value={assignment.description} className="form-control" cols={50} rows={5}
             onChange={(e) =>setAssignment({ ...assignment, description: e.target.value })}></textarea>
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
                      value={assignment.points}
                      onChange={(e) =>
                        setAssignment({ ...assignment, points: +e.target.value })
                      }
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
            
          </div>
          {/* Submission Type Section */}
          <div className="row mb-3">
          <h6 className="col-md-4 col-form-label text-end">Submission Type</h6>
        
            <div className="border col-sm-6 col-md-8 w-50 p-3 mb-3" style={{ borderRadius: '5px' }}>
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

          <div className="row g-0 text-end">
              <div className="col-6 col-md-4" style={{ paddingTop: "5px", paddingRight: "15px" }}>
                  Assign
              </div>
              <div className="col-sm-6 col-md-8 w-50 border p-3 mb-3 rounded" style={{ textAlign: "start" }}>
                  <div
                      className="wd-group"
                      style={{borderRadius: "1%", padding: "10px" }}
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
                      <input className="form-control" type="datetime-local" value={assignment.dueDate}
                         onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            dueDate: e.target.value,
                          })
                        }/>

                      <br />
                    <div className="row">
                        <div className="mb-3 col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">
                            <b>Available From</b>
                        </label>
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            value={assignment.availableFrom}
                            onChange={(e) =>
                              setAssignment({
                                ...assignment,
                                availableFrom: e.target.value,
                              })
                            }
                        />
                        </div>

                        <div className="mb-3 col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">
                            <b>Until</b>
                        </label>
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            value={assignment.availableUntil}
                            onChange={(e) =>
                              setAssignment({
                                ...assignment,
                                availableUntil: e.target.value,
                              })
                            }
                        />
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <br />
          <hr />
          <div className="d-flex justify-content-end">
            {!readOnly &&
              <div className="d-flex justify-content-between" style={{ paddingTop: "15px" }}>
                 
                  <span>
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                          
                          className="btn me-4" style={{ height: "fit-content", backgroundColor: "#E0E0E0" }}>
                          Cancel
                         
                      </Link>
                        <button onClick={handleSave} className="btn btn-danger" style={{ marginRight: "5px" }}>
                          Save
                      </button>
                  </span>
              </div>}
              <br />< br />

          </div>
      </div>
  );
}

export default AssignmentEditor