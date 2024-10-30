import { BsGripVertical } from "react-icons/bs";
import { PiNotePencilBold } from "react-icons/pi";
import LessonControlButtons from "../Modules/LessonControlButtons";

import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AssignmentsControls from "./AssignmentsControls";
import { addAssignment, deleteAssignment } from "./assignmentsReducer";
import AssignmentsHeaderButtons from "./AssignmentsHeaderButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { KanbasState } from "../../store";
import { BsPlus } from "react-icons/bs";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";


function Assignments() {
  const { courseId } = useParams();
  const assignmentsList = useSelector((state: KanbasState) =>
    state.assignmentsReducer.assignments);
  const assignmentList = assignmentsList.filter((a) => a.course === courseId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

const handleDelete = () => {
  const result = window.confirm("Do you want to proceed?");
  if (result) {
    console.log("User clicked Yes");
    return true;
  } else {
    console.log("User clicked No");
    return false;
  }
};
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <div id="wd-assignments">      
       <AssignmentsControls />
      <hr />
      <br />
      
      <div className="wd-assignments-list">
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
            {assignmentList.map((assignment) => (
              <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-start flex-grow-1 align-items-center">      
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencilBold className="me-2 fs-3" />       
                  <div>
                    {isFaculty ? (
                      <Link
                        className="wd-assignment-link"
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                      >
                        {assignment.name}
                      </Link>
                    ) : (
                      <span className="wd-assignment-name">{assignment.name}</span>
                    )}  
                    <br />
                    <div className="text-muted small mt-1">
                      {/* <span>{assignment.description} </span> | */}
                      <span className="text-danger"> Multiple Modules</span> |  
                      <span> <b>Available until</b> {assignment.availableUntilDate.slice(0,10)}</span> |
                      <br /><b>Due</b> {assignment.dueDateTime.slice(0,10)} |
                      <span>{assignment.points} pts </span>
                    </div>
                  </div>
                  
                  </div>
                  {isFaculty && 
                    <div className="btn m-0 pt-0 pb-0 me-1 btn-danger btn-sm"
                      onClick={() => {handleDelete() ? dispatch(deleteAssignment(assignment._id)) : 
                        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                      }}>
                      < FaTrash />
                    </div> 
                   }


              </li>
            ))}
          </ul>
          </li>
        </ul>
      </div>
    </div >
 



  );
}
export default Assignments;
