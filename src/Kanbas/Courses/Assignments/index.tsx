import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";

import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AssignmentsControls from "./AssignmentsControls";
import { addAssignment } from "./reducer";
import AssignmentsControlButtons from "./AssignmentsControlButtons";


export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); // Filter assignments for the course
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-assignments">
     {isFaculty && (
    <AssignmentsControls assignmentName={assignmentName} 
          setAssignmentName={setAssignmentName} 
          addAssignment={() => {
            dispatch(addAssignment({ name: assignmentName, course: cid }));
            setAssignmentName("");
          }}/>
      )}
      
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
          {assignments.map((assignment) => (
            <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-start flex-grow-1 align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilBold className="me-2 fs-3" />
                <div>
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link text-decoration-none">
                    {assignment.title}
                  </Link>
                  <div className="text-muted small mt-1">
                    <span className="text-danger">Multiple Modules</span> |
                    <span> <b>Available until</b> {assignment.availability}</span> |<br />
                    <span> <b>Due</b> {assignment.due}</span> |
                    <span> {assignment.points} pts</span>
                  </div>
                </div>
              </div>
              <LessonControlButtons />
            </li>
          ))}
        </ul>
    </li>
  </ul>
</div>



  );
}

