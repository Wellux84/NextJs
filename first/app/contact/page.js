'use client';

import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            setStatus('Succeed');
        } else {
            setStatus('Error: ' + data.error);
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
            />
            <button type="submit">Send</button>
        </form>
        <div>
            <h2>Contact Information</h2>
            {status && <p>{status}</p>}
        </div>
        </>
    );
}