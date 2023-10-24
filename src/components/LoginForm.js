import React, { useState } from 'react';
import Form from './Form';
import Cookie from 'js-cookie';

function LoginForm() {
    const [formData, setFormData] = useState([]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add logic to submit form data to backend here
        let urlAddress = "https://kavishdoshi.com"
        
        const data = {
            "username": formData['Username:'],
            "email": "123@gmail",
            "pass": formData['Password:'],
            "id": -1,
            "rol": "user",
            "urlAddress": Cookie.get('redirectURL') ? Cookie.get('redirectURL') : "https://kavishdoshi.com"
        }

        const response = await fetch('https://loginlogoutbackend.azurewebsites.net/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const userId = await response.text();
        
        if (userId != "invalid") {
            // Add logic to redirect to dashboard here
            console.log('Login successful');
            Cookie.set("UserId", userId, { expires: 1 , domain: '.kavishdoshi.com'})
            Cookie.set("SessionIdLogin", sessionId, { expires: 1 , domain: '.kavishdoshi.com'})
            Cookie.set('Auth', 'Allowed', { expires: 1 , domain: '.kavishdoshi.com'})

            window.location.href = Cookie.get('redirectURL') ? Cookie.get('redirectURL') : "https://kavishdoshi.com";
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
                handleChange={handleChange}
                />
    );
}

export default LoginForm;
