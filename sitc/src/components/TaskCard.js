import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const initialTask = {
    taskName:'',
    taskDescriptiong:''
}

const TaskCard = () => {
  
    const history = useHistory();
   // const { id } = useParams();

    const editTask = task => {
       // history.push('/editTask')
    }

   

    const deleteTask = e => {
        e.preventDefault();
    /*    axiosWithAuth()
        .delete(`https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks/${task.id}`)
        .then( res => {
            const changedTasks = tasks.filter((task) => {
                if(task.id !== res.data){
                    return task
                }
            });
            updateTaskList(changedTasks)
        })
        .catch( err => console.log('error deleting task', err))     */
    }
    

    return(
        <div className='taskCard'> 
             <h2>Current Tasks</h2>
                <ul>
                     
                    <li>we will map tasks from the backend and make a list using the taskId</li>
                    <li>if admin wants to edit the task they will be pushed to the edit task or it will bring up the edit task component</li>
                    <li>or it will bring up a form on this page to edit the task i'm undecided</li>
                    <button onClick={editTask} >Edit Task</button>
                    <button onClick={deleteTask} style={{backgroundColor: 'red',color:'white'}}>Delete</button>

                </ul>
        </div>
    )

}

export default TaskCard;