import { IoEllipsisVertical } from "react-icons/io5";
import Plusmark from "../Modules/Plusmark";

export default function AssignmentsControlButtons() {
  return (
    <div className="float-end">
       <button type="button" className="btn border btn-light me-2"> 40% of Total</button>
        <Plusmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
