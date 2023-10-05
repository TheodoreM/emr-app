import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from React Router
import axios from 'axios';

function LoginForm(props) {
    const [formInput, setFormInput] = useState({
        name: '',
        password: '',
        error: ''
    });

    const history = useHistory();
    const nameRegex = /^[0-9A-Za-z]{6,16}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formInput.name.match(nameRegex)) {
            setFormInput({
                ...formInput,
                error: 'Name should be 6-16 characters and alphanumeric.'
            });
            return;
        }

        if (!formInput.password.match(passwordRegex)) {
            setFormInput({
                ...formInput,
                error: 'Password should be 8-32 characters with at least one number and one letter.'
            });
            return;
        }

        try {
            const response = await axios.post('/api/register', { name: formInput.name, password: formInput.password });

            if (response.status === 200) {
                props.onSaveUserInfo({ name: formInput.name });
                history.push('/Home');
            } else {
                setFormInput({
                    ...formInput,
                    error: 'An error occurred during login. Please try again later.'
                });
                console.error('Login error:', error);
            }
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };

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
            {formInput.error && <p style={{ color: 'red' }}>{formInput.error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="usrname">Username:</label>
                    <input
                        type="text"
                        id="usrname"
                        name="username"
                        value={formInput.email}
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
                        value={formInput.password}
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