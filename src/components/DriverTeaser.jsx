import React from 'react';

const DriverTeaser = () => {
    return (
        <div className="py-20 bg-dark relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-6 z-10">
                    <h2 className="text-4xl font-bold text-white">
                        For Drivers: <span className="text-primary">Focus & Win</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        GoodWheel isn't just a monitor; it's your co-pilot.
                        Earn points for smooth braking, focused driving, and safe speeds.
                        Climb the leaderboard and unlock real rewards.
                    </p>
                    <ul className="space-y-4 mt-4">
                        {[
                            "Real-time Safety Score",
                            "Gamified Focus Mode",
                            "Instant Trip Feedback",
                            "Earn Badges & Rewards"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-200">
                                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Content */}
                <div className="flex-1 relative z-10 flex justify-center">
                    <div className="relative w-64 md:w-80 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden bg-black">
                        <img
                            src="/assets/driver_app_mockup_1767469181192.png"
                            alt="GoodWheel Driver App"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default DriverTeaser;
