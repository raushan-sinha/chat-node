import React from 'react'

export default function Form() {
    //todo: Input field logic -
    const formFields = [
        { idx: 1, placeholder: 'Full Name', type: 'text', id: 'name', name: 'name', autocomplete: 'username' },
        { idx: 2, placeholder: 'Email', type: 'email', id: 'email', name: 'email', autocomplete: 'email' },
    ];

    //todo: Options -
    const formOptions = [
        { id: 1, value: 'request-1', text: 'Collaboration with Me' },
        { id: 2, value: 'request-2', text: 'Career Queries' },
        { id: 3, value: 'request-3', text: 'Asking Coding / Tech Problem' },
    ];

    return (
        <>
            <div className="w-full max-w-md bg-gray-800/80 rounded-2xl shadow-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                    ChatNode Request Form
                </h2>

                <form className="flex flex-col">
                    {formFields.map((item) => (
                        <input
                            key={item.idx}
                            placeholder={item.placeholder}
                            id={item.id}
                            name={item.name}
                            autoComplete={item.autocomplete}
                            className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition duration-150"
                            type={item.type}
                        />
                    ))}

                    <select
                        className="bg-gray-700 text-gray-200 border-0 rounded-md p-3 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition duration-150"
                        id="request"
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
                    />

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