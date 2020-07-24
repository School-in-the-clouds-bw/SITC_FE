import React, { useState }from 'react';
import styled from 'styled-components';
import * as yup from 'yup';



// const schema = yup.object().shape({
//     username: yup.string().required().min(3, 'Invalid Username'),
//     password: yup.string().string().email()    
// })



const Login = () => {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (



        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type='text' name='username' />
                </label>
                <label>
                    Password:
                    <input type='text' name='password' />
                </label>
                <button type='submit' disabled={buttonDisabled}>Login</button>
            </form>
            
        </div>
    );
};


export default Login;