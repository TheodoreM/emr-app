import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const RegistrationForm = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfPass] = useState('');
    const [error, setError] = useState('')

    const history = useHistory();
    const nameRegex = /^[0-9A-Za-z]{6,16}$/;
    const passwordRegex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.match(nameRegex)) {
            setError('Name should be 6-16 characters and alphanumeric.');
            return;
        }

        if (!password.match(passwordRegex)) {
            setError('Password should be 8-32 characters with at least one number and one letter.');
            return;
        }

        if (password !== confirmPass) {
            setError('Passwords do not match');
            return;
        }

        const userData = {
            username: name,
            password: password
        }

        props.onSaveUserInfo(userData);
        try {

            const response = await axios.post('/api/register', { name, password });

            if (response.status === 200) {
                history.push('/LoginForm'); // history.push to navigate
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('An error occurred:', error);
            setError('An error occurred while registering.')


        }

        setName('');
        setPassword('');
        setConfPass('');
        setError('');
    };

    const handleChange = (identifier, value) => {
        if (identifier === 'name') {
            setName(value);
        } else if (identifier === 'password') {
            setPassword(value);
        } else {
            setConfPass(value);
        }
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(event) => handleChange('name', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        id="pwd"
                        name="password"
                        value={password}
                        onChange={(event) => handleChange('password', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confpass">Confirm Password:</label>
                    <input
                        type="password"
                        id="confpass"
                        name="confirmPass"
                        value={confirmPass}
                        onChange={(event) => handleChange('confirmPass', event.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="confPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;