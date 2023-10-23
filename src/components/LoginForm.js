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
        const data = {
            "username": formData['Username:'],
            "email": formData['Email:'],
            "pass": formData['Password:'],
            "id": -1
        }

        const response = await fetch('https://loginlogoutbackend.azurewebsites.net/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        
        console.log(JSON.stringify(data));

        const json = await response.json();
        console.log(json);
        
        if (json > 0) {
            // Add logic to redirect to dashboard here
            console.log('Login successful');
            window.location.href = "https://kavishdoshi.com";
            // const cookieData = Cookie.get('x-go-to');
            // console.log('Sign up successful');
            // Cookie.set('x-custom-auth-header', 'isAuthed', {expires: 1});
            // window.location.href = cookieData;
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
