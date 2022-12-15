import React from "react";

function Home({ login }) {
  return (
    <>
      <div className="main-container">
        <h2>Ozuem Eugene ALT/SOE/022/5395</h2>
        <p>Welcome to my AltSchool Examination project on React Routers</p>
      </div>
      <button onClick={login}>Login</button>
    </>
  );
}

export default Home;
