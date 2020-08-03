import React from "react";
import * as yup from "yup";
import axios from "axios";

import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Form = styled.form`
  background-color: #9fe2bf;
  width: 50%;
  padding: 2%;
  display: flex;
  justify-content: space-evenly;
  margin-left: 25%;
  text-align: left;
`;

const Input = styled.input`
  padding-left: 20%;
`;

const SignUp = () => {
  const defaultState = {
    name: "",
    password: "",
    email: "",
    password: "",
    role: "",
  };

  const history = useHistory();
  const [formState, setFormState] = React.useState(defaultState);
  const [errors, setErrors] = React.useState({ ...defaultState });
  const [newUser, setNewUser] = React.useState([]);
  const [buttonDisabler, setDisabler] = React.useState(true);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Please Enter Name")
      .min(2, "Name must be at least two characters"),
    username: yup
      .string()
      .required("Please Enter Username")
      .min(3, "Username must be at least three characters"),
    email: yup
      .string()
      .required("Please Enter Email")
      .email("Please Enter Valid Email"),
    password: yup
      .string()
      .required("Please Enter Password")
      .min(7, "Password must be at least seven characters"),
    role: yup.string().required("Please Select Role").min(5),
  });

  const validateChange = (e) => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.name]: "",
        })
      )
      .catch((error) =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0],
        })
      );
  };

  const changeHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
    validateChange(e);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => {
        setNewUser([...newUser, res.data]);
        console.log(newUser);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    formSchema.isValid(formState).then((valid) => setDisabler(!valid));
  }, [formState]);

  return (
    <Form>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Name:{" "}
          <Input
            type="text"
            name="name"
            onChange={changeHandler}
            placeholder="Name"
          ></Input>
          {errors.length !== 0 && <p>{errors.name}</p>}
        </label>
        <label htmlFor="username">
          Username:{" "}
          <Input
            type="text"
            name="username"
            onChange={changeHandler}
            placeholder="Username"
          ></Input>
          {errors.length !== 0 && <p>{errors.name}</p>}
        </label>
        <label htmlFor="email">
          Email:{" "}
          <Input
            type="text"
            name="email"
            onChange={changeHandler}
            placeholder="Email"
          ></Input>
          {errors.length !== 0 && <p>{errors.email}</p>}
        </label>
        <label htmlFor="password">
          Password:{" "}
          <Input
            type="password"
            name="password"
            onChange={changeHandler}
            placeholder="Password"
          ></Input>
          {errors.length !== 0 && <p>{errors.password}</p>}
        </label>
        <label htmlFor="role">
          Role:{" "}
          <select name="role" onChange={changeHandler}>
            <option value="null">--Select Role--</option>
            <option value="Student">Student</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Adminstrator">Administrator</option>
          </select>
          {errors.length !== 0 && <p>{errors.role}</p>}
        </label>

        <button name="submit" disabled={buttonDisabler}>
          Sign Up!
        </button>
      </form>
    </Form>
  );
};

export default SignUp;
