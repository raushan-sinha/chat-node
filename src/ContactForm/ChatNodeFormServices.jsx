import React from "react";

export default function ChatNodeFormServices() {
    return (
        <div className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-700 text-white">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-400">
                ChatNode Form Services
            </h1>
            <p className="text-center text-gray-300 mb-8">
                Use this form to collaborate, ask career queries, or get help with coding problems 👇
            </p>

            <div className="space-y-8">
                {/* Collaboration Section */}
                <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                        🤝 Collaboration with Me
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Want to build something amazing together? I’m open to{" "}
                        <span className="font-semibold text-white">free collaborations</span> on exciting frontend projects — from portfolio websites to dashboards and full web apps. Share your idea, and let’s bring it to life using{" "}
                        <span className="text-blue-300">HTML, CSS, JavaScript, React, and Bootstrap.</span>
                    </p>
                </div>

                {/* Career Queries Section */}
                <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                        🎯 Career Queries
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Need guidance for your frontend journey? You can ask about building a portfolio,
                        resume tips, interview prep, or how to start your career in web development.
                        I’ll share practical advice to help you grow faster in tech.
                    </p>
                </div>

                {/* Coding / Tech Problems Section */}
                <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700 hover:border-blue-500 transition">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                        💻 Coding / Tech Problems
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Stuck on a bug or facing a project issue? Describe your coding or technical problem,
                        and I’ll help you find a solution. This includes issues with{" "}
                        <span className="text-blue-300">JavaScript, React, or responsive design.</span>
                        Provide clear details for faster assistance!
                    </p>
                </div>
            </div>

            <p className="text-center text-gray-400 mt-10 text-sm">
                💬 <span className="text-blue-400 font-semibold">ChatNode</span> — Collaborate. Learn. Solve.
            </p>
        </div>
    );
}