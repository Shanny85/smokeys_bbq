import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic (e.g., API call)
        setIsSubmitted(true);
    };

    return (
        <div className="bg-slate-800 text-white min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">Contact Us</h1>

                {/* Contact Info Section */}
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl mb-12">
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Get In Touch</h3>
                    <p className="text-lg mb-4">
                        Have any questions or need assistance? Our customer service team is here to help! Please reach out to us using the contact form below, or feel free to email us directly.
                    </p>
                    <p className="text-lg mb-4">
                        Email: <a href="mailto:support@smokeysbbq.com" className="text-orange-500">support@smokeysbbq.com</a>
                    </p>
                    <p className="text-lg">
                        Phone: <a href="tel:+1234567890" className="text-orange-500">+1 234 567 890</a>
                    </p>
                </div>

                {/* Contact Form */}
                <div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-600 font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-black"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>

                    {isSubmitted && (
                        <div className="mt-4 text-green-500 text-center">
                            <p>Your message has been sent! We will get back to you shortly.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
