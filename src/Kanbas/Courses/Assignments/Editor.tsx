import { RxCross2 } from "react-icons/rx";
import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentEditor() {
  return (
    <div className="container my-4">
      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea id="wd-description" className="form-control" rows={4} defaultValue="The assignment is available online. Submit a link to the landing page." />
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="wd-points" className="col-md-4 col-form-label">Points</label>
          <div className="col-md-8">
            <input id="wd-points" className="form-control" defaultValue={100} />
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
                <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
              </div>
              <div className="mb-3">
                <label htmlFor="wd-available-from" className="form-label"><b>Available From</b></label>
                <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-10" />
              </div>
              <div className="mb-3">
                <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-13" />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-secondary me-2">Cancel</button>
          <button type="submit" className="btn btn-primary btn-danger">Save</button>
        </div>
      </form>
    </div>
  );
}
