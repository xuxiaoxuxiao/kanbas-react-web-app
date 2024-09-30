import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import Plusmark from "./Plusmark";
export default function ModuleControlButtons() {
  return (
    <div className="float-end">       
        <GreenCheckmark />
        <Plusmark />
        <IoEllipsisVertical className="fs-4" />
    </div>
);}

