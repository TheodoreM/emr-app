import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import axios from 'axios';

function LoginForm() {
    const [formInput, setFormInput] = useState({
        name: '',
        password: ''
    });

    const history = useHistory(); // Access the history object
    const nameRegex = /^[0-9A-Za-z]{6,16}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();



        if (!formInput.name.match(nameRegex)) {
            console.error('Name should be 6-16 characters and alphanumeric.');
            return;
        }

        if (!formInput.password.match(passwordRegex)) {
            console.error('Password should be 8-32 characters with at least one number and one letter.');
            return;
        }

        try {
            const response = await axios.post('/api/login', { email, password });

            if (response.status === 200) {
                // Login successful, redirect to the home page or another protected route
                history.push('/home'); // Use history.push to navigate
            } else {
                // Login failed, handle errors
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle network or other errors
        }
    };

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    const nameChangeHandler = (event) => {
        setFormInput(
            (prevState) => {
                return {
                    ...prevState,
                    name: event.target.value
                }
            }
        )
    }

    const passwordChangeHandler = (event) => {
        setFormInput(
            (prevState) => {
                return {
                    ...prevState,
                    password: event.target.value
                }
            }
        )
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usrname">Username:</label>
                    <input
                        type="text"
                        id="usrname"
                        name="username"
                        value={formData.email}
                        onChange={nameChangeHandler}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={passwordChangeHandler}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;