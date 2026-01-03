import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Driver',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`GoodWheel Inquiry from ${formData.name} (${formData.role})`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`);

        // Open mail client
        window.location.href = `mailto:contact@goodwheel.world?subject=${subject}&body=${body}`;

        // Redirect to home after a short delay
        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-dark flex flex-col pt-20">
            <div className="flex-grow flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-2 text-center">Get in Touch</h2>
                    <p className="text-gray-400 text-center mb-8">We'd love to hear from you.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 outline-none transition-all"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">I am a...</label>
                            <select
                                id="role"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white outline-none transition-all"
                            >
                                <option value="Driver">Driver</option>
                                <option value="Fleet Manager">Fleet Manager</option>
                                <option value="Investor">Investor</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-500 outline-none transition-all resize-none"
                                placeholder="How can we help?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-primary hover:bg-emerald-400 text-dark font-bold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/20"
                        >
                            Send Message
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
