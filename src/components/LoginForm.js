import React, { useState } from 'react';
import Form from './Form';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
        // Add logic to submit form data to backend here

        const response = true;
        if (response) {
            // Add logic to redirect to dashboard here
            console.log('Login successful');
            window.location.href = 'https://kavishdoshi.com';
        } else {
            // Add logic to display error message here
            console.log('Login failed');
        }
    };

    return (
        <Form 
                labels={[{label: 'Username:', inputType: "text"},
                         {label: 'Password:', inputType: "password"}]} 
                         
                handleSubmit={handleSubmit} 
                submitText='Submit'
                />
    );
}

export default LoginForm;
