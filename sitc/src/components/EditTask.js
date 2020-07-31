import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { editTaskInfo } from '../Actions';
import { useDispatch, useSelector } from 'react-redux';

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

const EditTask = (setTaskToEdit, taskToEdit ,task ) => {
    
    const history = useHistory();
    const dispatch = useDispatch();
   // const taskToEdit = useSelector(state => state.taskToEdit)

    const onInputChange = e => {
        setTaskToEdit({
            ...taskToEdit,
            [e.target.name]: e.target.value,
        })
    };   

  const saveEditedTask = e => {
      console.log('taskToEdit from taskEditForm submit', taskToEdit)
      dispatch(editTaskInfo(taskToEdit, taskToEdit.id))
      history.push('/adminDashboard')
  }

    return(
        <StyledEditTaskForm onSubmit={saveEditedTask}>
        <h2>Edit Task</h2>
        <h4>Task Name</h4>
        <input 
            type='text'
            name='taskName'
            value={taskToEdit.taskName}
            onChange={onInputChange}
            />
        <h4>Task Description</h4>
        <input 
            type='text'
            name='taskDescription'
            value={taskToEdit.taskDescription}
            onChange={ onInputChange }
            />
        <StyledButton>Submit Changes</StyledButton>
        </StyledEditTaskForm>
    )
};

export default EditTask;