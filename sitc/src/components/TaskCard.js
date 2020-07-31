import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTaskData } from '../Actions'
import { useDispatch } from 'react-redux';
const initialTask = {
    taskName:'',
    taskDescription:''
}

const StyledTask = styled.ul `
display: flex;
flex-direction:column;
border:1px solid rgb(210, 210, 210);
border-radius: 5px;
box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
margin: 8px;
padding: 12px;
background-color: white;
width: 50%;
margin-left: 25%;
align: center;
`
const StyledButton = styled.button `
width: 15%;
margin-left: 40%;
`

const TaskCard = ({ task, setShowTasks }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const editTask = task => {
        history.push('/editTask')
    }

   

    const deleteTask = e => {
        dispatch(deleteTaskData(task.id))
        console.log('this is the task id to be deleted',task.id)
       setShowTasks(false);
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
                <StyledTask>
                    <li>Task Name : {task.taskName} </li>
                    <li>Task Description : {task.taskDescription} </li>
                    <StyledButton onClick={editTask} >Edit</StyledButton>
                    <StyledButton onClick={deleteTask} style={{backgroundColor: 'red',color:'white'}}>Delete</StyledButton>

                </StyledTask>
        </div>
    )

}

export default TaskCard;