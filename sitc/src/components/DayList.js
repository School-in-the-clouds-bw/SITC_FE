import React from "react";

export default function DayList(props) {
  return (
    <div>
      {props.addNewDay && props.addNewDay.map(days =>
      <div className="daysTime" key={days.id}> 
        <p>Day(s) Selected: {days.dayAvailable}</p>
        <button>Delete</button>
        </div>
        )}
    </div>
  );
}
