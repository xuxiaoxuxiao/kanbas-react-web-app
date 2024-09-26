import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Labs from "../Labs";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">     
        <td valign="top">
               <Routes>
                 <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
                 <Route path="/Account/*" element={<Account />} />
                 <Route path="/Dashboard" element={<Dashboard />} />
                 <Route path="/Courses/:cid/*" element={<Courses />} />
                 <Route path="/Calendar" element={<h1>Calendar</h1>} />
                 <Route path="/Inbox" element={<h1>Inbox</h1>} />
                 <Route path="/Labs/*" element={<Labs />} />
               </Routes>
          </td>
        </div>
    </div>

);}

// export default function Kanbas() {
//     return (
//       <div id="wd-kanbas">
//         <h1>Kanbas</h1>
//         <table>
//           <tr>
//             <td valign="top">
//               <KanbasNavigation />
//             </td>
//             <td valign="top">
//               <Routes>
//                 <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
//                 <Route path="/Account/*" element={<Account />} />
//                 <Route path="/Dashboard" element={<Dashboard />} />
//                 <Route path="/Courses/:cid/*" element={<Courses />} />
//                 <Route path="/Calendar" element={<h1>Calendar</h1>} />
//                 <Route path="/Inbox" element={<h1>Inbox</h1>} />
//               </Routes>
//             </td>
//           </tr>
//         </table>
//       </div>


// );}
  