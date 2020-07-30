import React from "react";
import * as yup from "yup";
import axios from "axios";

const SignUp = () => {
    const defaultState = {
        name: "",
        username: "",
        email: "",
        password: "",
        role: "",
       // terms: false
    }

    const [formState, setFormState] = React.useState(defaultState);
    const [errors, setErrors] = React.useState({...defaultState, terms:""});
    const [newUser, setNewUser] = React.useState([]);
    const [buttonDisabler, setDisabler] = React.useState(true);

    const formSchema = yup.object().shape({
        name: yup.string().required("Please Enter Name").min(2, "Name must be at least two characters"),
        username: yup.string().required("Please Enter Username").min(3, "Username must be at least three characters"),
        email: yup.string().required("Please Enter Email").email("Please Enter Valid Email"),
        password: yup.string().required("Please Enter Password").min(7, "Password must be at least seven characters"),
        role: yup.string().required("Please Select Role").min(5),
       // terms: yup.boolean().oneOf([true], "Please Accept Terms and Conditions")
    })

    const validateChange = e => {
        e.persist();
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid =>
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          )
          .catch(error =>
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
          );}

          const changeHandler = (e)=>{
            const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
            setFormState (
                {...formState, [e.target.name]: value}
            )
            validateChange(e);
        }

        const submitHandler = e => {
            e.preventDefault();
            console.log("submitted");
            axios
              .post("https://school-in-the-cloud-be.herokuapp.com/api/auth/register", formState)
              .then(res => {
                setNewUser([...newUser, res.data])
                console.log(newUser)
              })
              .catch(err => console.log(err));
          };

          React.useEffect(()=>{
            formSchema.isValid(formState).then(valid => setDisabler(!valid));
        }, [formState])


    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="name">Name:<input type="text" name="name" onChange={changeHandler} placeholder="Name"></input>{errors.length !== 0 && <p>{errors.name}</p>}</label>
                <label htmlFor="username">Username:<input type="text" name="username" onChange={changeHandler} placeholder="Username"></input>{errors.length !== 0 && <p>{errors.name}</p>}</label>
                <label htmlFor="email">Email:<input type="text" name="email" onChange={changeHandler} placeholder="Email"></input>{errors.length !== 0 && <p>{errors.email}</p>}</label>
                <label htmlFor="password">Password:<input type="password" name="password" onChange={changeHandler} placeholder="Password"></input>{errors.length !== 0 && <p>{errors.password}</p>}</label>
                <label htmlFor="role">Role: <select name="role" onChange={changeHandler}>
                    <option value="null">--Select Role--</option>
                    <option value="Student">Student</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Adminstrator">Administrator</option>
                </select>{errors.length !== 0 && <p>{errors.role}</p>}</label>
               {// <label htmlFor="terms"><input type="checkbox" name="terms" onChange={changeHandler} />I accept the Terms and Conditions </label>}
}
                <button name="submit" disabled={buttonDisabler}>Sign Up!</button>
            </form>
                    </div>
    )
}

export default SignUp;