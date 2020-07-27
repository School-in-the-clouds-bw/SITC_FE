import React from "react";

export default function UserEdit() {
  return (
    <>
      <div className="title">
        <h1>Edit Profile</h1>
      </div>
      <div className="sections">
        <h4>Country: </h4>
        <button>Edit</button>
      </div>
      <div className="sections">
        <h4>Day(s) Available: </h4>
        <button>Edit</button>
      </div>
      <div className="sections">
        <h4>Time Available: </h4>
        <button>Edit</button>
      </div>
      <button>Update Information</button>
    </>
  );
}
