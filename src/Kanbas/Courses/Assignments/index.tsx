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
import AssignmentsHeaderButtons from "./AssignmentsHeaderButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";


export default function Assignments() {
  const { cid } = useParams();
  const [assignmentName, setAssignmentName] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  //const [assignments, setAssignments] = useState<any[]>(db.assignments);
  const assignments = db.assignments.filter((assignment) => assignment.course === cid); 
  const setAssignments = useState<any[]>(db.assignments);
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-assignments">
     {isFaculty && (
       <AssignmentsControls 
         assignmentName={assignmentName}
         setAssignmentName={setAssignmentName}
         addAssignment={() => {
           dispatch(addAssignment({ name: assignmentName, course: cid }));
           setAssignmentName("");
         }}
         cid={cid || ""} // Pass the actual cid value here
       />
     )}
      
    <br /><br />
  
    <ul id="wd-assignments-list" className="list-group rounded-0">
      <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
      
        <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center"> 
          <div>
            <BsGripVertical className="wd-assignments-title me-2 fs-3" />
            ASSIGNMENTS
          </div>
          <AssignmentsHeaderButtons />
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
              <AssignmentControlButtons AssignmentId={""} deleteAssignment={function (AssignmentId: string): void {
                throw new Error("Function not implemented.");
              } } editAssignment={function (AssignmentId: string): void {
                throw new Error("Function not implemented.");
              } } />
            </li>
          ))}
        </ul>
    </li>
  </ul>
</div>



  );
}

