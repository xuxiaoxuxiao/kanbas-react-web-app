// export default function Assignments() {
//     return (
//       <div id="wd-assignments">
//         <input id="wd-search-assignment"
//                placeholder="Search for Assignments" />
//         <button id="wd-add-assignment-group">+ Group</button>
//         <button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button>
//         </h3>
//         <ul id="wd-assignment-list">
//             <li className="wd-assignment-list-item">
//                 <a className="wd-assignment-link"
//                 href="#/Kanbas/Courses/1234/Assignments/123">
//                 A1 - ENV + HTML
//                 </a><br />
//                 <span className="wd-assignment-list-item">Multiple Modules </span>
//                 |
//                 <span className="wd-assignment-list-item"><b> Not available until</b> May 6 at 12:00am </span>
//                 |<br />
//                 <span className="wd-assignment-list-item"><b>Due </b> May 13 at 11:59pm </span>
//                 |
//                 <span className="wd-assignment-list-item"> 100 pts</span>
//             </li>
//             <li className="wd-assignment-list-item">
//                 <a className="wd-assignment-link"
//                 href="#/Kanbas/Courses/1234/Assignments/123">
//                 A2 - CSS + BOOTSTRAP
//                 </a><br />
//                 <span className="wd-assignment-list-item">Multiple Modules </span>
//                 |
//                 <span className="wd-assignment-list-item"><b> Not available until</b> May 13 at 12:00am </span>
//                 |<br />
//                 <span className="wd-assignment-list-item"><b>Due </b> May 20 at 11:59pm </span>
//                 |
//                 <span className="wd-assignment-list-item"> 100 pts</span>
//             </li>
//             <li className="wd-assignment-list-item">
//                 <a className="wd-assignment-link"
//                 href="#/Kanbas/Courses/1234/Assignments/123">
//                 A3 - JAVASCRIPT + REACT
//                 </a>
//                 <br />
//                 <span className="wd-assignment-list-item">Multiple Modules </span>
//                 |
//                 <span className="wd-assignment-list-item"><b> Not available until</b> May 20 at 12:00am </span>
//                 |<br />
//                 <span className="wd-assignment-list-item"><b>Due </b> May 27 at 11:59pm </span>
//                 |
//                 <span className="wd-assignment-list-item"> 100 pts</span>
//             </li>
//         </ul>
//       </div>
//   );}


import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaPlus } from "react-icons/fa";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import AssignmentsControlButtons from "./AssignmentsCorntolButtons";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { PiNotePencilBold } from "react-icons/pi";

export default function Assignments() {
  return (
    <div id = "wd-assignments">
      <AssignmentsControls /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light"> 
            <BsGripVertical className="wd-assignments-title me-2 fs-3" />
              ASSIGNMENTS 40% of Total
            <AssignmentsControlButtons />
          </div>

          {/* Lesson Items */}
          <ul className="wd-lesson list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3"/>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A1 - ENV + HTML
                  <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |
                  <span> Not available until May 6 at 12:00am</span> |<br/>
                  <span> Due May 13 at 11:59pm</span> |
                  <span> 100 pts</span>
                </div>
                </a>
                
              </div>
              <LessonControlButtons />

              
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3"/>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A2 - CSS + BOOTSTRAP
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>Not available until May 13 at 12:00am</span> |<br/>
                    <span>Due May 20 at 11:59pm | 100 pts</span>
                  </div>
                </a>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div>
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3"/>
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                  A3 - JAVASCRIPT + REACT
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |
                    <span>Not available until May 20 at 12:00am</span> |<br/>
                    <span>Due May 27 at 11:59pm | 100 pts</span>
                  </div>
               </a>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        
        </li>
      </ul>
    </div>

  );
}
