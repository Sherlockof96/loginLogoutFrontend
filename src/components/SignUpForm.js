import React, { use, useState } from 'react';
import Form from './Form';
import Cookie from 'js-cookie';

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

            console.log('Sign up successful');
            Cookie.set('Auth', 'Allowed', { expires: 1 , domain: '.kavishdoshi.com'})

            if (Cookie.get('redirectURL'))
            {
                window.location.href = Cookie.get('redirectURL');
            }
            window.location.href = "https://kavishdoshi.com";
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
