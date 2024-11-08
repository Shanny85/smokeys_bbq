import { Link } from 'react-router-dom';
import ceo from "../assets/people/Shanon_Naicker.png";
import chef from "../assets/people/chef.jpg";
import oppman from "../assets/people/oppman.jpg";

const About = () => {
    return (
        <div className="bg-slate-800 text-white min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <h1 className="text-4xl font-bold text-orange-500 text-center mb-8">About Us</h1>

                {/* Company Description Section */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-semibold text-white mb-4">Our Story</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        Welcome to Smokey's BBQ, your go-to destination for delicious, fresh, and fast food delivered right to your door.
                        We are passionate about providing high-quality meals with a focus on taste, convenience, and customer satisfaction.
                        Our team works tirelessly to ensure every dish is prepared with care and delivered in the quickest possible time.
                        Whether you're craving BBQ, burgers, or something sweet, we have something for every taste!
                    </p>
                </div>

                {/* Mission Statement Section */}
                <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl mb-12">
                    <h3 className="text-2xl font-semibold text-orange-500 mb-4">Our Mission</h3>
                    <p className="text-lg">
                        At Smokey's BBQ, our mission is simple: to provide an exceptional food delivery experience that combines the
                        best food with the highest level of service. We aim to make dining at home as enjoyable as eating out,
                        with easy online ordering, fast delivery, and meals that delight the senses.
                    </p>
                </div>

                {/* Meet the Team Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">Meet the Team</h2>
                    <p className="text-lg text-gray-400 mb-8">
                        Our team consists of passionate food lovers and delivery experts who are dedicated to bringing the best food experience
                        to your doorstep.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src={ceo} alt="Team Member" className="w-full h-40 object-cover rounded-t-lg mb-4"/>
                            <h4 className="font-semibold text-gray-800">Shanon Naicker</h4>
                            <p className="text-gray-600">Founder & CEO</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src={chef} alt="Team Member" className="w-full h-40 object-cover rounded-t-lg mb-4"/>
                            <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                            <p className="text-gray-600">Head Chef</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src={oppman} alt="Team Member" className="w-full h-40 object-cover rounded-t-lg mb-4"/>
                            <h4 className="font-semibold text-gray-800">Mark Johnson</h4>
                            <p className="text-gray-600">Operations Manager</p>
                        </div>
                    </div>
                </div>

                {/* Back to Menu Link */}
                <div className="mt-8 text-center">
                    <Link to="/menu" className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600">
                        Back to Menu
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
