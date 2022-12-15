import React from "react";

function Dashboard({ logout }) {
  return (
    <div>
      <p>Welcome User</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
