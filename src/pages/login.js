import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import LoginForm from '@/components/LoginForm';

function Login() {

    return (
        <>
            <TransitionEffect />
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
                <LoginForm />
            </main>
        </>
    );
}

export default Login;
