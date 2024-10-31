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
                    <div className="row">
                        <div className="mb-3 col-md-6">
                        <label htmlFor="wd-available-from" className="form-label">
                            <b>Available From</b>
                        </label>
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            value={assignment?.availableFromDate || ''}
                            onChange={(e) => dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))}
                        />
                        </div>

                        <div className="mb-3 col-md-6">
                        <label htmlFor="wd-available-until" className="form-label">
                            <b>Until</b>
                        </label>
                        <input 
                            type="datetime-local" 
                            className="form-control"
                            value={assignment?.availableUntilDate || ''}
                            onChange={(e) => dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))}
                        />
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <br />
          <hr />
          <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-between" style={{ paddingTop: "15px" }}>
                 
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

          </div>
      </div>
  );
}

export default AssignmentEditor