import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserInput from '../components/UserInput';
import SocialSignup from '../components/SocialSignup';
import Footer from '../components/Footer';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegisterButton = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', { username, password });
            if (response.data.success) {
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (err) {
            console.error('Registration failed', err);
            alert('An error occurred. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <div className="login-register">
            <UserInput
                username={username}
                password={password}
                handleChange={handleChange}
                handleSubmit={handleRegisterButton}
                isLogin={false}
            />
            <SocialSignup
                isLogin={false}
            />
            <Footer />
        </div>
    );
};

export default Register;
