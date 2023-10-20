import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';
import SignUpForm from '@/components/SignUpForm';

function Login() {

    return (
        <>
            <TransitionEffect />
            <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
                <SignUpForm />
            </main>
        </>
    );
}

export default Login;
