import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="relative min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url('/assets/hero_background_1767469160504.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Drive </span>
                        <span className="text-primary">Good</span>,
                        <span className="text-white"> Get </span>
                        <span className="text-primary">Rewarded</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        The intelligent driver monitoring system that transforms fleet safety into a rewarding game.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/coming-soon" className="px-8 py-4 bg-primary hover:bg-emerald-400 text-dark font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                            Get Started
                        </Link>
                        <Link to="/contact" className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all backdrop-blur-sm">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
