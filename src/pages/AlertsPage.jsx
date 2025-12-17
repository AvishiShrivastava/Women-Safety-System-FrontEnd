import React from "react";
import { Link } from "react-router-dom";

export default function AlertsPage() {
  return (
    <div>
      <h2>Active Alerts (Police)</h2>

      <p>
        Below is the list of active SOS alerts. Click an alert to view details.
      </p>

      {/* Dummy alerts list (for now) */}
      <ul>
        <li>
          <Link to="/alerts/1">Alert #1 – Location: Bhopal</Link>
        </li>
        <li>
          <Link to="/alerts/2">Alert #2 – Location: Indore</Link>
        </li>
        <li>
          <Link to="/alerts/3">Alert #3 – Location: Gwalior</Link>
        </li>
      </ul>
    </div>
  );
}
