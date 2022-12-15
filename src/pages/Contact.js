import React from "react";
import { Link } from "react-router-dom";
import Email from "./Email";
import Phone from "./Phone";

function Contact() {
  return (
    <>
      <div className="main-container">
        <h2>Contact me</h2>
        <Email />
        <Phone />
      </div>

      <Link to={"/"}>Back to Home</Link>
    </>
  );
}
export default Contact;
