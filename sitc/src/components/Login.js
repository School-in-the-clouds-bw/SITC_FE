import React, { useState }from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory  } from 'react-router-dom';

// const formSchema = yup.object().shape({
//     username: yup.string().required().min(3, 'Invalid Username'),
//     password: yup.string().string().email()    
// })

const defaultFormState = {
    username: '',
    password: '',
}

const defaultErrorState = {
    username: '',
    password: ''
}


// const validateChange = event => {
//     yup
//         .reach(formSchema, event.target.name)
//         .validate()
//         .then(valid => {
//             setErrors({
//                 ...errors,
//                 [event.target.name]: ""
//             });
//         })
//         .catch(err => {
//             setErrors({
//                 ...errors,
//                 [event.target.name]: err.errors[0]
//             });
//         });
// };

const Login = () => {
    const history = useHistory();
    const [formState, setFormState] = useState(defaultFormState);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [errors, setErrors] = useState(defaultErrorState);

    const handleChange = event=> {
        console.log(formState)
        setFormState({
            ...formState, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth().post("https://school-in-the-cloud-be.herokuapp.com/api/auth/login", formState)
        .then(response => {
            window.localStorage.setItem('id', response.data.id)
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('role', response.data.role)
            window.localStorage.setItem('username', response.data.username)
            console.log(response)
            if (response.data.role == 'Administrator'){
                history.push('/adminDash')
            } else if (response.data.role == 'Volunteer'){
                history.push('/volunteerDash')
            } else if (response.data.role == 'Student'){
                history.push('/studentDash')
            }
        })
        .catch(err => console.log('Error from Axios Login Call', err))
    }

    
    return (



        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text' name='username'onChange={handleChange}  value={formState.username}/>
                </label>
                <label>
                    Password:
                    <input type='password' name='password' onChange={handleChange} value={formState.password} />
                </label>
                <button type='submit' disabled={buttonDisabled}>Login</button>
            </form>
            
        </div>
    );
};


export default Login;
