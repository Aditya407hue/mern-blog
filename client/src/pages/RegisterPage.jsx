import React, { useState } from 'react'

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.status === 200) {
            alert('Registration successful');
        }
        else {
            alert('Registration failed');
        }
    }
    return (
        <>
            <h2 className='head'>Register</h2>
            <form action="" className='register' onSubmit={register}>
                <input type='email' placeholder="email" value={email}
                    onChange={ev => setEmail(ev.target.value)} />
                <input type="text" placeholder='username'
                    value={username} onChange={ev => setUsername(ev.target.value)} />
                <input type="password" placeholder='password'
                    value={password} onChange={ev => setPassword(ev.target.value)} />
                <button>Register</button>
            </form>
        </>
    )
}

export default RegisterPage