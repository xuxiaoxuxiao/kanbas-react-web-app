import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import Plusmark from "../Modules/Plusmark";

export default function AssignmentontrolButtons(
  { AssignmentId, deleteAssignment,editAssignment}: { 
    AssignmentId: string; deleteAssignment: (AssignmentId: string) => void;
    editAssignment: (AssignmentId: string) => void }
) {
  return (
    <div className="float-end">
        <FaPencil onClick={() => editAssignment(AssignmentId)} className="text-primary me-3" />
        <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(AssignmentId)}/>       
        <GreenCheckmark />
        <Plusmark />
        <IoEllipsisVertical className="fs-4" />
    </div>
);}

