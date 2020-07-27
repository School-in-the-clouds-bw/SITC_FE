import React, { useState } from 'react';

const TaskCard = () => {
    const [ showTasks, setShowTasks ] = useState(true);

    const editTask = e => {
        e.preventDefault();
       

    }

    const deleteTask = e => {
        e.preventDefault();

    }


    return(
        <div className='taskCard'> 
             <h2>Current Tasks</h2>
                <ul>
                    <li>we will map tasks from the backend and make a list using the taskId</li>
                    <li>if admin wants to edit the task they will be pushed to the edit task or it will bring up the edit task component</li>
                    <li>or it will bring up a form on this page to edit the task i'm undecided</li>
                    <button>Edit Task</button>
                    <button onClick={() => setShowTasks}>Cancel</button>
                    <button>Delete</button>
                </ul>
        </div>
    )

}

export default TaskCard;