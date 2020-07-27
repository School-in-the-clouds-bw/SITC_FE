import React, { useState } from 'react';
import TaskCard from './TaskCard';

const initialFormValues = {
    taskName:'',
    taskDescription:''
}

export default function AdminDashboard() {

    const [ expand, setExpand ] = useState(false);
    const [ fillOutForm, setFillOutForm ] = useState(initialFormValues);
    const [ showTasks, setShowTasks ] = useState(false);

    const expandForm = e =>{
        e.preventDefault();
        setExpand(true);
        setFillOutForm()
    };

    const submitNewTask = e => {
        e.preventDefault();
        setExpand(false);
        setFillOutForm(initialFormValues);
    }

    const getTasks = e => {
        e.preventDefault();
        
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

                 < TaskCard   />

                <h2>Current Tasks</h2>
                <ul>
                    <li>this will be removed after actions and reducers are setup</li>
                   
                    <button>Edit Task</button>
                    <button onClick={() => setShowTasks(false)}>Cancel</button>
                    <button>Delete</button>
                </ul>
            </div>
        )}
        </div>
    )

};