import React from 'react'
import UserEdit from './UserEdit';

export default function DayList(props) {
    return (
        <div>
            {props.day.map(days => (
                <UserEdit days={days}/>
            ))}
        </div>
    )
}
