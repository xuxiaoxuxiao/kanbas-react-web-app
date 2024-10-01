// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br />
//         <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//         <textarea id="wd-description">
//           The assignment is available online Submit a link to the landing page of
//         </textarea>
//         <br />
//         <br />
//         <table>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//             <input id="wd-points" value={100} />
//             </td>
//           </tr>
        
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select id="wd-group"> 
//               <option value="Quizzes">QUIZZES</option>
//               <option value="Exams">EXAMS</option>
//               <option value="Projects">PROJECT</option>
//               <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//             </td>
//         </tr><br />

//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-display-grade-as">Display Grade As</label>
//           </td>
//           <td>
//             <select id="wd-display-grade-as"> 
//               <option value="Points">Points</option>
//               <option selected value="Percentage">Percentage</option>
//             </select>
//             </td>
//         </tr><br />

//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-submission-type">Submission Type</label>
//           </td>
//           <td>
//             <select id="wd-submission-type"> 
//               <option value="OnPaper">On Paper</option>
//               <option selected value="Online">Online</option>
//             </select> <br /> <br />
          
//               <tr> 
//               <label htmlFor="wd-submission-type">Online Entry Options</label>
//               </tr>
//               <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
//               <label htmlFor="wd-text-entry">Text Entry</label><br/>

//               <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
//               <label htmlFor="wd-website-url">Website URL</label><br/>

//               <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
//               <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

//               <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
//               <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
              
//               <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
//               <label htmlFor="wd-file-upload">File Uploads</label><br/>   
//             </td>
//         </tr><br />

//         <tr>
//           <td align="right" valign="top">
//           <label>Assign </label>   
//           </td>
//           <td align="left" valign="top">
//           <label htmlFor="wd-assign-to">Assign to</label>
//           <br />   
//           <input id="wd-assign-to" value="Everyone" />
//           </td>
//         </tr><br />
        
//         <tr>
//           <td></td>
//           <td align = "left" valign="top">
//           <label htmlFor="wd-due-date"> Due </label>
//           <br />
//           <input type="date"id="wd-due-date"value="2024-05-13"/>
//           </td>
//         </tr><br />


//         <tr>
//           <td></td>
//           <td align = "left" valign="top">
//           <label htmlFor="wd-available-from">Available from </label>
//           <br />
//           <input type="date"id="wd-available-from"value="2024-05-13"/><br/>
//           </td>
//           <td align="left"valign="top">
//           <label htmlFor="wd-available-until">Until </label><br />
//           <input type="date"id="wd-available-until"value="2024-05-13"/><br/>
//           </td>
//           </tr>
          
    
//         <td><hr /></td>
//         <td><hr /></td>
//         <td align = "right" valign="top">
//         <hr /> 
//         <button>Cancel</button>
//         <button>Save</button>
//         </td>
//       </table>
//       </div>
// );}


import React from 'react';
import { FaPlus } from 'react-icons/fa';

export default function AssignmentEditor() {
  return (
    <div className="container my-4">
      <h2>Assignment Name</h2>
   

      <form>
        <div className="mb-3">
          <label htmlFor="wd-name" className="form-label"><b>Assignment Name</b></label>
          <input id="wd-name" className="form-control" defaultValue="A1 - ENV + HTML" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label"><b>Description</b></label>
          <textarea id="wd-description" className="form-control" defaultValue="The assignment is available online. Submit a link to the landing page." />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input id="wd-points" className="form-control" type="number" defaultValue={100} />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select id="wd-group" className="form-select">
            <option value="Quizzes">QUIZZES</option>
            <option value="Exams">EXAMS</option>
            <option value="Projects">PROJECT</option>
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
          <select id="wd-display-grade-as" className="form-select">
            <option value="Points">Points</option>
            <option selected value="Percentage">Percentage</option>
          </select>
        </div>

        <div className="border p-3 mb-3" style={{ borderRadius: '5px'}}>
          <label htmlFor="wd-submission-type" className="form-label"><b>Submission Type</b></label>
          <select id="wd-submission-type" className="form-select mb-3">
            <option value="OnPaper">On Paper</option>
            <option selected value="Online">Online</option>
          </select>

          {/* Online Entry Options */}
          <label className="form-label"><b>Online Entry Options</b></label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url" />
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


        {/* <div className="mb-3">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select id="wd-submission-type" className="form-select">
            <option value="OnPaper">On Paper</option>
            <option selected value="Online">Online</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label"><b>Online Entry Options</b></label>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-text-entry" />
            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="wd-website-url" />
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
        </div> */}

        <div className="mb-3">
          <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
          <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input type="date" id="wd-due-date" className="form-control" defaultValue="2024-05-13" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-available-from" className="form-label">Available From</label>
          <input type="date" id="wd-available-from" className="form-control" defaultValue="2024-05-10" />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input type="date" id="wd-available-until" className="form-control" defaultValue="2024-05-13" />
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
