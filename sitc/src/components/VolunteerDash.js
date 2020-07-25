import React from "react";
import { Link } from "react-router-dom";

export default function VolunteerDash() {
  return (
    <>
      <div className="title">
        <h1>Hello User</h1>
      </div>
      <div className="headings">
        <h2>Tasks</h2>
      </div>
      <div className="taskcard">
        <h4>Type</h4>
        <h4>Day</h4>
        <h4>Time</h4>
      </div>
      <div className="headings">
        <h2>Profile</h2>
        <Link to={"/editprofile"}>
          <button>Edit Profile</button>
        </Link>
      </div>
      <div className="profilecard">
        <h4>Country: </h4>
        <h4>Days Available: </h4>
        <h4>Times Available: </h4>
      </div>
    </>
  );
}