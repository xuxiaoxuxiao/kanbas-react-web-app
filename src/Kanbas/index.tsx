import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
export default function Kanbas() {
    return (
      <div id="wd-kanbas">
        <h1>Kanbas</h1>
        <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>


);}
  