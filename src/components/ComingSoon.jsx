import React from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark text-white">
            {/* Background Image Reuse */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url('/assets/hero_background_1767469160504.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark z-0"></div>

            <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
                <h1 className="text-6xl font-bold mb-6 text-primary">Coming Soon</h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    We are working hard to build the future of fleet safety.
                    <br />
                    GoodWheel is launching soon. Stay tuned!
                </p>
                <Link
                    to="/"
                    className="inline-block px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-full text-white font-semibold transition-all backdrop-blur-sm"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;
