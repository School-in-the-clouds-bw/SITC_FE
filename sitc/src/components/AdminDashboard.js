import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getTasks } from '../Actions';
import Loader from 'react-loader-spinner';

const StyledNewTaskForm = styled.form `
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

const initialFormValues = {
    taskName:'',
    taskDescription:''
}

const AdminDashboard = ({ isFetching, tasks, error, getTasks}) => {

    const [ expand, setExpand ] = useState(false);
    const [ fillOutForm, setFillOutForm ] = useState(initialFormValues);
    const [ showTasks, setShowTasks ] = useState(false);
    const [ taskList, setTaskList ] = useState(initialFormValues);
    

    const submitNewTask = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks', fillOutForm)
            .then( res => {
                console.log('this is the new task being submitted',res.data)
            })
        setExpand(false);
        setFillOutForm(initialFormValues);
    }

  /*  const getTasks = e => {
        e.preventDefault();
        setShowTasks(true);
        axiosWithAuth()
            .get('https://school-in-the-cloud-be.herokuapp.com/api/admin/tasks')
            .then( res => {
                setTaskList(res.data)
                console.log('get tasks axios call res.data',res.data)
            })
            .catch( err => console.log('error getting task list ', err))
    }*/

    const expandTasks = e => {
        e.preventDefault();
        setShowTasks(true);
        getTasks();
    }

   

    return (
        <div >
            <h2>Admin Dashboard</h2>
        <button onClick={() => setExpand(true)}>Create New Task</button>
        <button onClick={expandTasks} >Edit Existing Task</button>
        {expand && (
            <StyledNewTaskForm onSubmit={submitNewTask}>
                <h2>Make A New Task</h2>
                <label>Task Name:   </label>
                    <input 
                    onChange={e => 
                    setFillOutForm({...fillOutForm, taskName:e.target.value})}
                    value={fillOutForm.taskName}
                    />
              
                <label>Task Description:</label>
                    <input
                    onChange={e =>
                    setFillOutForm({...fillOutForm, taskDescription:e.target.value})}
                    value={fillOutForm.taskDescription}
                    />
                    
                    <StyledButton type='submit'>Save</StyledButton>
                    <StyledButton onClick={() => setExpand(false)}>Cancel</StyledButton>
                
            </StyledNewTaskForm>
        )}
        {showTasks && (
            <div className='tasks'>
                { isFetching && <Loader type="Circles" color="#00bfff" height={100} width={100} />}
                {tasks.map(task => {
                    return<TaskCard key={task.id} task={task} setShowTasks={setShowTasks} />
                })}
            
                    <button onClick={() => setShowTasks(false)}>Hide</button>
                    
            </div>
        )}
        </div>
    )

};

const mapStateToProps = state => {
    return{
        isFetching: state.isFetching,
        tasks: state.tasks,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getTasks })
 (AdminDashboard);