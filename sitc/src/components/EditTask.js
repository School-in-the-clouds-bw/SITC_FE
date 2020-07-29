import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';

const StyledEditTaskForm = styled.form `
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
`
const StyledButton = styled.button `
width: 15%;
margin-left: 40%;
`

export default function EditTask (props) {
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

    const saveEditedTask = e => {
        e.preventDefault();
        axiosWithAuth()
        .put(`https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks/${props.task.id}`, changeTask)
        .then( res => {
            axiosWithAuth()
            .get('https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks')
            .then( res => {
                props.updateTaskList(res.data)
            })
            .catch( err => console.log('error getting updated tasklist after edit',err))
        })
        .catch( err => console.log('problem saving edited task',err))
    }

    return(
        <StyledEditTaskForm onSubmit={saveEditedTask}>
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
        <StyledButton>Submit Changes</StyledButton>
        </StyledEditTaskForm>
    )
};