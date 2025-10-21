import React, { useState } from 'react'
import Alert from '@mui/material/Alert';

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [request, setRequest] = useState('Collaboration with Me')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [formResult, setFormResult] = useState('')

    //todo: Input field logic -
    const formFields = [
        { idx: 1, placeholder: 'Full Name', type: 'text', id: 'name', name: 'name', autocomplete: 'username' },
        { idx: 2, placeholder: 'Email', type: 'email', id: 'email', name: 'email', autocomplete: 'email' },
    ];

    //todo: Options -
    const formOptions = [
        { id: 1, value: 'Collaboration with Me', text: 'Collaboration with Me' },
        { id: 2, value: 'Career Queries', text: 'Career Queries' },
        { id: 3, value: 'Asking Coding / Tech Problem', text: 'Asking Coding / Tech Problem' },
    ];

    //todo: Form Validation logic (Input fields) -
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        //? Input Validations -
        if (!name.trim()) {
            setError('Name field is empty.')
            return;
        } else if (name.trim().length < 3) {
            setError('Name must be at least 3 characters.')
            return;
        }
        if (!email.trim()) {
            setError('Email field is empty.')
            return;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Email is invalid.')
            return;
        }
        if (!message.trim()) {
            setError('Message field is empty.')
            return;
        } else if (message.trim().length <= 10) {
            setError('Message must be at least 10 characters.')
            return;
        }

        setFormResult('Sending...')
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('request', request);
        formData.append('message', message);
        formData.append('access_key', '5fecc6e9-0eda-423f-ba7a-2ae89e021c61');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            const result = await response.json();
            if (result.success) {
                setFormResult(`Thank you ${name}, your message has been sent successfully.`)
            } else {
                throw new Error("Form submission failed.");
            }

            setTimeout(() => {
                setFormResult('')
                setName('')
                setEmail('')
                setRequest('Collaboration with Me')
                setMessage('')
            }, 2000);
        } catch (err) {
            setError('Network error. Please try again later.');
            console.error(err);
        }
    }

    return (
        <>
            <div className="w-full max-w-md bg-gray-800/80 rounded-2xl shadow-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                    ChatNode Request Form
                </h2>

                <form className="flex flex-col" onSubmit={handleSubmit}>
                    {formFields.map((item) => (
                        <input
                            key={item.idx}
                            placeholder={item.placeholder}
                            id={item.id}
                            name={item.name}
                            autoComplete={item.autocomplete}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition duration-150"
                            type={item.type}
                            value={item.name === 'name' ? name : email}
                            onChange={(e) =>
                                item.name === 'name' ? setName(e.target.value) : setEmail(e.target.value)
                            }
                        />
                    ))}

                    <select
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition duration-150"
                        id="request"
                        value={request}
                        onChange={(e) => setRequest(e.target.value)}
                    >
                        {formOptions.map((option) => (
                            <option key={option.id} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>

                    <textarea
                        placeholder="Write your message..."
                        id='message'
                        name='message'
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 h-28 resize-none focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition duration-150"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <br />
                    {error && (
                        <Alert variant="filled" severity="error">{error}</Alert>
                    )}
                    {formResult && (
                        <Alert variant="filled" severity="success">{formResult}</Alert>
                    )}
                    <br />

                    <button
                        className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-md hover:from-indigo-600 hover:to-blue-600 transition duration-150"
                        type="submit"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </>
    );
}