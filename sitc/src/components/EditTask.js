import React, { useState } from 'react';


export default function EditTask () {
    const [ changeTask, setChangeTask ] = useState({
        taskName:'',
        taskDescription:''
    });

    const onInputChange= e => {
        setChangeTask({
            ...changeTask,
            [e.target.name]: e.target.value,
        })
    };

    const submitEditedTask = e => {
        e.preventDefault();

    }

    return(
        <form onSubmit={submitEditedTask}>
        <h2>Edit Task</h2>
        <h4>Task Name</h4>
        <input 
            type='text'
            name='taskName'
            value={changeTask.taskName}
            onChange={onInputChange}
            />
        <h4>Task Description</h4>
        <input 
            type='text'
            name='taskDescription'
            value={changeTask.taskDescription}
            onChange={onInputChange}
            />
        <button>Submit Changes</button>
        </form>
    )
};