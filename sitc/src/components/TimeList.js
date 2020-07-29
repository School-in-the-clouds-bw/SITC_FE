import React from "react";

export default function TimeList(props) {
  return (
    <div>
      {props.addNewTime && props.addNewTime.map(times =>
      <div className="daysTime" key={times.id}> 
        <p>Time(s) Selected: {times.timeAvailable}</p>
        <button>Delete</button>
        </div>
        )}
    </div>
  );
}