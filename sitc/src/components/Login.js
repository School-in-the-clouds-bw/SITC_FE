import React, { useState }from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory  } from 'react-router-dom';



const FormContainer = styled.div `
font-size: 1.2rem;
background-color: #ccffe5;
color: #96534b;
box-shadow: rgba(104, 113, 88, 0.12) 0px 5px 10px, rgba(104, 113, 88, 0.24) 0px 5px 2px;
width: 50%;
background-color: rgb(159, 226, 191);
align-items: center;
margin-left: 25%;
border-radius: 8px;
`;

const Input = styled.input `
padding: 0.5em;
border: none;
border-radius: 3px;
width: 25%;
margin-bottom: 0.5em;
margin-left: 0.5em;
margin-right: 0.5em;
`

const Button = styled.button `
font-size 1rem;
margin: 5px;
background-color: #ccffe5;
color: #96534b;
border-color: #96534b;
&:hover {
    background-color: #96534b;
    color: #e3a69f;
`;


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
            window.localStorage.setItem('token', response.data.token)
            window.localStorage.setItem('role', response.data.role)
            console.log(response)
            if (response.data.role == 'Administrator'){
                history.push('/adminDashboard')
            } else if (response.data.role == 'Volunteer'){
                history.push('/volunteerDash')
            } else if (response.data.student == 'Student'){
                history.push('/studentDash')
            }
        })
        .catch(err => console.log('Error from Axios Login Call', err))
    }

    
    return (



        <div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <Input type='text' name='username'onChange={handleChange}  value={formState.username}/>
                </label>
                <label>
                    Password:
                    <Input type='text' name='password' onChange={handleChange} value={formState.password} />
                </label>
                <Button type='submit' disabled={buttonDisabled}>Login</Button>
                </form>
                </FormContainer>
        </div>
    );
};



export default Login;
