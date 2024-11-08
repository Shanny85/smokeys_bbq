import { Link } from 'react-router-dom';
import { useState } from 'react';
import dish from '../assets/dishicon.jpg'

const Cart = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    // Handle item quantity change (increment or decrement)
    const handleQuantityChange = (id, size, spiceLevel, increment) => {
        const updatedCart = [...cartItems];
        const itemIndex = updatedCart.findIndex(
            item => item.id === id && item.size === size && item.spiceLevel === spiceLevel
        );

        if (itemIndex !== -1) {
            updatedCart[itemIndex].quantity += increment;
            if (updatedCart[itemIndex].quantity < 1) updatedCart[itemIndex].quantity = 1; // prevent going below 1
        }

        // Update cart in localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        window.location.reload(); // Refresh to update UI
    };

    // Clear the cart (cancel order)
    const handleCancelOrder = () => {
        localStorage.removeItem('cart');
        window.location.reload(); // Refresh to update UI
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4 bg-slate-800 min-h-screen">
            <div className="max-w-4xl mx-auto bg-slate-800 text-white">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">Your Order</h2>

                {/* Cancel Confirmation Modal */}
                {showCancelConfirmation && (
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
                            <h3 className="text-lg font-semibold text-gray-700">Are you sure you want to cancel your order?</h3>
                            <div className="mt-4 flex justify-end space-x-4">
                                <button
                                    onClick={() => setShowCancelConfirmation(false)}
                                    className="px-4 py-2 bg-gray-400 text-white rounded-md"
                                >
                                    No
                                </button>
                                <button
                                    onClick={handleCancelOrder}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md"
                                >
                                    Yes, Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cart Items */}
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.size}-${item.spiceLevel}`} className="bg-slate-100 p-4 rounded-lg shadow-lg flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={item.imageUrl || dish} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                                <div>
                                    <h3 className="font-semibold text-lime-500">{item.name}</h3>
                                    <p className="text-gray-500">Size: {item.size} | Spice: {item.spiceLevel}</p>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.size, item.spiceLevel, -1)}
                                            className="bg-gray-400 rounded-md text-white px-3 py-1"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-bold text-orange-500">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.size, item.spiceLevel, 1)}
                                            className="bg-gray-400 text-white px-3 py-1 rounded-md"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <span className="text-orange-500 font-semibold">R {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-white">Total: R {total.toFixed(2)}</h3>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setShowCancelConfirmation(true)}
                            className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700"
                        >
                            Cancel Order
                        </button>
                        <Link to="" className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700">
                            Checkout
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <Link to="/menu" className="text-white text-lg underline">Back to Menu</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
