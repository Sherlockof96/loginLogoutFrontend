import React, { use, useState } from 'react';
import Form from './Form';
import Cookie from 'js-cookie';
import { NextResponse } from 'next/server';

function SignUpForm() {
    const [formData, setFormData] = useState([]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Connect to server to submit user sign up data
        const data = {
            "username": formData['Username:'],
            "email": formData['Email:'],
            "pass": formData['Password:'],
            "id": 0
        }

        const response = await fetch('https://loginlogoutbackend.azurewebsites.net/signup', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const json = await response.json();

        if(json > 0) {
            const cookieData = Cookie.get('x-go-to');
            console.log('Sign up successful');
            Cookie.set('x-custom-auth-header', 'isAuthed', {expires: 1});
            window.location.href = cookieData;
        }

    };

    return (
        <>
            <Form 
                labels={[{label: 'Username:', inputType: "text"}, 
                         {label: 'Email:', inputType: "email"}, 
                         {label: 'Password:', inputType: "password"}]} 
                         
                handleSubmit={handleSubmit} 
                submitText='SignUp'
                handleChange={handleChange}
                />
        </>
    );
}

export default SignUpForm;
