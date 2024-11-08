import HomeComp from "../components/HomeComp.jsx";
import {Link} from "react-router-dom";


const HomePage = () => {


    return (
        <>
            {/* Left Side: Welcome Message */}
            <div className="mt-4 w-1/2 z-30 absolute ml-8">
                <h2 className="md:text-5xl text-3xl text-nowrap text-center font-bold text-red-600 mb-4 px-6">
                    Welcome to Smokey&#39;s BBQ!
                </h2>

                {/* Login Prompt */}
                <div className="login-prompt opacity-70 ml-6 shadow-md px p-4 bg-slate-800 border-l-4 border-lime-500 rounded-md mt-80">
                    <p className="text-lg text-center text-white">
                        Want to place an order?{' '}
                        <Link
                            to="/login"
                            className="text-orange-500 font-semibold hover:text-red-600 transition duration-200 ease-in-out text-nowrap"
                        >
                            Login to order now!
                        </Link>
                    </p>
                </div>
            </div>
            <HomeComp/>
        </>
    );
};

export default HomePage;
