import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTaskData, setTaskToEdit } from '../Actions'
import { useDispatch } from 'react-redux';
import  EditTask from '../components/EditTask';
const initialTask = {
    taskName:'',
    taskDescription:'',
    id:''
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

const DeleteWarning = styled.div `
    background-color:red;
    color: white;
`

const TaskCard = ({ tasks, setShowTasks }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ taskToEdit, setTaskToEdit ] = useState(initialTask)
    const [ edit, setEditing ] = useState()
    const [ taskToDelete, setTaskToDelete] = useState(initialTask)
    const [ okayToDelete, setOkayToDelete] = useState(false)

    const editTask = task => {
        setEditing(true)
        setTaskToEdit(task)
    };

    const verifyDelete = task => {
        setOkayToDelete(true)
        setTaskToDelete(task)
    }

    const onInputChange = e => {
        setTaskToEdit({
            ...taskToEdit,
            [e.target.name]: e.target.value,
        })
    };   

    const saveEditedTask = e => {
        e.preventDefault()
        axiosWithAuth()
        .put(`https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks/${taskToEdit.id}`, taskToEdit)
        .then( res => {
            console.log('task to edit',res.data)
            const updateTasks = tasks.map((task) => {
                return task.id === taskToEdit.id ? res.data : task;
            })
            setEditing(false)
            setTaskToEdit(initialTask)
            setShowTasks(false)
        })
        .catch(err => console.log('error editing task',err))
       // dispatch(setTaskToEdit(task.id));
      //  console.log('this is the task to be edited',task)
        //history.push('/adminDashboard')

    }

   

    const deleteTask = e => {
        dispatch(deleteTaskData(taskToDelete.id))
        console.log('this is the task id to be deleted',taskToDelete.id)
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
                <div >
                    {tasks.map(task => ( <StyledTask>
                         <li>Task Name : {task.taskName} </li>
                         <li key={task.id} >Task Description : {task.taskDescription} </li>
                         <StyledButton onClick={() => editTask(task)} >Edit</StyledButton>
                         <StyledButton onClick={() => verifyDelete(task)} 
                         style={{backgroundColor: 'red',color:'white'}}>Delete</StyledButton>
                         </StyledTask>
                    ))}
                   
                </div>

                {edit && (
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
                            onChange={onInputChange}
                            />
                            <StyledButton type="submit" >Submit Changes</StyledButton>
                            <StyledButton onClick={() => setEditing(false)} >Cancel</StyledButton>
                    </StyledEditTaskForm>
                )}

                {okayToDelete && (
                    <DeleteWarning>
                    <h2>Are you sure you want to delete?</h2>
                    <button onClick={deleteTask} style={{backgroundColor: 'blue',color:'white'}} >yes delete</button>
                    <button onClick={() => setOkayToDelete(false)}>Cancel</button>
                    </DeleteWarning>
                )}
                
        </div>
    )

}

export default TaskCard;