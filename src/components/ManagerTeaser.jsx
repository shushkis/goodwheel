import React from 'react';

const ManagerTeaser = () => {
    return (
        <div className="py-20 bg-gradient-to-b from-dark to-secondary/10 relative">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row-reverse items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-4xl font-bold text-white">
                        For Managers: <span className="text-secondary text-blue-400">Data-Driven Fleets</span>
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        Gain complete visibility into your fleet's performance.
                        Identify high-risk drivers, optimize training, and reduce insurance costs with our advanced analytics dashboard.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        {[
                            { title: "Risk Heatmaps", desc: "Visualize danger zones" },
                            { title: "Driver Scoring", desc: "Fair & transparent metrics" },
                            { title: "Live Tracking", desc: "Real-time fleet location" },
                            { title: "Smart Alerts", desc: "Instant incident notification" }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors">
                                <h3 className="text-blue-400 font-semibold mb-1">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                        <img
                            src="/assets/manager_dashboard_mockup_1767469196986.png"
                            alt="Fleet Manager Dashboard"
                            className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerTeaser;
