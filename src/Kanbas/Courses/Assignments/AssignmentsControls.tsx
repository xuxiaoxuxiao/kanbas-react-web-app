import { FaSearch } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  useParams } from "react-router";
export default function AssignmentsControls() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const navigate = useNavigate();
  const { cid } = useParams();
  return (
    <div className="d-flex justify-content-between mb-4">
      
      
      <div className="input-group w-50">
        <span className="input-group-text bg-light">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          id="wd-search-assignment"
          placeholder="Search for Assignment"
        />
      </div>
      {isFaculty &&
        <div>
          <button className="btn wd-add-assignment-group btn-secondary me-2">
            + Group
          </button>
          <div className="wd-button float-end">
                <button  onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
              className="btn wd-add-assignment btn-danger me-2">

                  + Assignment
                </button>
                <button className="btn wd-add-assignment-group btn-secondary "> <IoEllipsisVertical className="fs-4" /> </button>
          </div>
          
        </div>
      }
    </div>
  );
}
