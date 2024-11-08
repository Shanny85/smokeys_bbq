import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-8 mt-4">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/menu" className="hover:text-orange-500">Menu</Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-orange-500">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-orange-500">Contact</Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-orange-500">Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook-f fa-lg"></i>
                            </a>
                            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-gray-400 mb-4">Get the latest updates and offers delivered to your inbox.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 rounded-l-md text-gray-800"
                            />
                            <button className="bg-orange-500 text-white p-2 rounded-r-md hover:bg-orange-600">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2024 Smokey&#39;s BBQ. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Designed by Shanon Naicker
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
