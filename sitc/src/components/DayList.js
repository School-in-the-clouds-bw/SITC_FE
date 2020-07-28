import React from "react";

export default function DayList(props) {
  return (
    <div>
      {props.addNewDay && props.addNewDay.map(days =>
      <div key={days.id}> 
        <p>Day(s) Selected: {days.dayAvailable}</p>
        </div>
        )}
    </div>
  );
}
