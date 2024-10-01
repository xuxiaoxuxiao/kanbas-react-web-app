import { FaSearch } from "react-icons/fa";

export default function AssignmentsControl(){
    return(
        <div className="d-flex justify-content-between mb-4">
        <div className="input-group w-50">
          <span className="input-group-text bg-light">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            id="wd-search-assignment"
            placeholder="Search..."
          />
        </div>
        <div>
          <button className="btn wd-add-assignment-group btn-secondary me-2">+ Group</button>
          <button className="btn wd-add-assignment btn-danger">+ Assignment</button>
        </div>
      </div>
    );
}

