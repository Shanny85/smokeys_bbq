import { Link } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { useEffect, useState } from 'react';

const Nav = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Retrieve cart from localStorage
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

        // Calculate the total quantity of items in the cart
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

        setCartCount(totalQuantity); // Set the cart count in state
    }, []); // Empty array ensures this only runs once when the component mounts

    return (
        <nav className="bg-gray-900 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                {/* Left side: Site name */}
                <Link to="/" className="text-3xl font-bold text-red-600 hover:text-red-500 transition duration-200 ease-in-out">
                    Smokey&#39;s BBQ
                </Link>

                {/* Right side: Menu, Cart and Login button */}
                <div className="flex items-center space-x-6">
                    <div>
                        <Link to="/menu" className="font-semibold hover:text-red-600">Menu</Link>
                    </div>

                    {/* Cart Icon with dynamic count */}
                    <div className="relative">
                        <Link to="/cart">
                            <CgShoppingCart className="h-6 w-6 text-white hover:text-red-500 cursor-pointer transition duration-200 ease-in-out" />
                            {/* Display badge with number of items in cart if cartCount > 0 */}
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-block w-5 h-5 bg-red-600 text-white text-xs rounded-full -mr-2 -mt-2 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    {/* Login Button */}
                    <Link to="/login" className="text-white font-semibold hover:text-red-500 transition duration-200 ease-in-out">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
