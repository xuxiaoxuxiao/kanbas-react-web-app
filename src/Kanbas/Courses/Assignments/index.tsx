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
import { FaCheckCircle, FaCircle, FaSearch } from "react-icons/fa";
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
      <div className="wd-assignments-list">
        <ul className="list-group wd-margin-left" style={{ borderRadius: "0%" }}>
          <li className="list-group-item list-group-item-secondary">
            <div>
              <BsGripVertical className="me-2" />
              <b>Assignments</b>
              <AssignmentsHeaderButtons />
            </div>
          </li>
          <ul className="list-group" style={{ borderRadius: "0%" }}>
            {assignmentList.map((assignment) => (
              <li className='list-group-item'>
                <div className='row'>
                  <div className='col-auto' style={{ margin: "auto", display: "flex" }}>
                    <BsGripVertical style={{ verticalAlign: "middle", marginRight: "10px" }} />
                    <FaPencil />
                  </div>
                  <div className='col wd-fg-color-gray ps-0 ms-2'>
                    <Link style={{ color: 'green', textDecoration: 'none' }} className="fw-bold ps-0" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                      {assignment.name}
                    </Link>
                    <br />
                    {assignment.description} |
                    <br /><b>Due</b> {assignment.dueDateTime.slice(0,16)} | {assignment.points} points
                  </div>
                  <div className="col-auto" style={{ margin: "auto", display: "flex" }}>
                  <button className="btn m-0 pt-0 pb-0 me-1 btn-danger btn-sm"
                  onClick={() => {handleDelete() ? dispatch(deleteAssignment(assignment._id)) : 
                    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
                  }}>
                  Delete</button>
                    <FaCheckCircle
                      style={{ color: "green" }} />
                    <BsGripVertical style={{ verticalAlign: "middle" }} />
                  </div>
                </div>
              </li>
            ))}
          </ul>

        </ul>
      </div>
    </div >
 



  );
}
export default Assignments;
