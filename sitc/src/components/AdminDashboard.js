import React, { useState } from 'react';

const initialFormValues = {
    taskName:'',
    taskDescription:''
}

export default function AdminDashboard() {

    const [ expand, setExpand ] = useState(false);
    const [ fillOutForm, setFillOutForm ] = useState(initialFormValues);
    const [ showTasks, setShowTasks ] = useState(false);

    const expandForm = () =>{
        setExpand(true);
        setFillOutForm()
    };

    const submitNewTask = e => {
        setExpand(false);
        setFillOutForm(initialFormValues);
    }

    const getTasks = () => {
        setShowTasks(true);
    }

    const editTask = () => {
        setShowTasks(false)

    }

    const deleteTask = () => {

    }

    return (
        <div >
        <button onClick={() => setExpand(true)}>Create New Task</button>
        <button onClick={() => setShowTasks(true)}>Edit Existing Task</button>
        {expand && (
            <form onSubmit={submitNewTask}>
                <h2>Make A New Task</h2>
                <label>Task Name:
                    <input 
                    onChange={e => 
                    setFillOutForm({...fillOutForm, taskName:e.target.value})}
                    value={fillOutForm.taskName}
                    />
                </label>
                <label>Task Description:
                    <input
                    onChange={e =>
                    setFillOutForm({...fillOutForm, taskDescription:e.target.value})}
                    value={fillOutForm.taskDescription}
                    />
                    <button type='submit'>Save</button>
                    <button onClick={() => setExpand(false)}>Cancel</button>
                </label>
            </form>
        )}
        {showTasks && (
            <div className='tasks'>
                <h2>Current Tasks</h2>
                <ul>
                    <li>we will map tasks from the backend and make a list using the taskId which will probaly be Date.now()</li>
                    <li>if admin wants to edit the task they will be pushed to the edit task or it will bring up the edit task component</li>
                    <li>or it will bring up a form on this page to edit the task i'm undecided</li>
                    <button>Edit Task</button>
                    <button onClick={() => setShowTasks(false)}>Cancel</button>
                    <button>Delete</button>
                </ul>
            </div>
        )}
        </div>
    )

};