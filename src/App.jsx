import React from 'react'
import Form from './ContactForm/From';
import ChatNodeFormServices from './ContactForm/ChatNodeFormServices';

export default function App() {
    return (
        <>
            <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col md:flex-row items-center justify-center gap-8 p-6">
                {/* Form Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Form />
                </div>

                {/* Services Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <ChatNodeFormServices />
                </div>
            </main>
        </>
    );
}