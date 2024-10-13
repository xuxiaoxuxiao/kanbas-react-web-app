import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentsControlButtons from "./AssignmentsCorntolButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      
      <AssignmentsControls />
      <br /><br />
      
      <ul id="wd-assignments-list" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center"> 
            <div>
              <BsGripVertical className="wd-assignments-title me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <AssignmentsControlButtons />
          </div>

         
          <ul className="wd-lesson list-group rounded-0">
            {/* Assignment Item 1 */}
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="wd-assignment-link text-decoration-none">
                    A1 - ENV + HTML
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |
                    <span> <b>Not available until </b>May 6 at 12:00am</span> |<br />
                    <span> <b>Due </b>May 13 at 11:59pm</span> |
                    <span> 100 pts</span>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment Item 2 */}
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/124" className="wd-assignment-link text-decoration-none">
                    A2 - CSS + BOOTSTRAP
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |
                    <span> <b>Not available until </b>May 13 at 12:00am</span> |<br />
                    <span> <b>Due </b>May 20 at 11:59pm</span> |
                    <span> 100 pts</span>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>

            {/* Assignment Item 3 */}
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3" />
                <div>
                  <a href="#/Kanbas/Courses/1234/Assignments/125" className="wd-assignment-link text-decoration-none">
                    A3 - JAVASCRIPT + REACT
                  </a>
                  <div className="text-muted small">
                    <span className="text-danger">Multiple Modules</span> |
                    <span> <b>Not available until </b>May 20 at 12:00am</span> |<br />
                    <span> <b>Due</b> May 27 at 11:59pm</span> |
                    <span> 100 pts</span>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
