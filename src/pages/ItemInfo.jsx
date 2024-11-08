import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import menuitem1 from '../assets/porkribs.png';
import menuitem2 from '../assets/burger.png';
import menuitem3 from '../assets/steaknchips.png';
import menuitem4 from '../assets/chipndip.png';
import menuitem5 from '../assets/cookie.png';
import menuitem9 from "../assets/snackplate.png";
import menuitem8 from "../assets/grilledprawns.png";
import menuitem6 from "../assets/herodessert.png";
import menuitem7 from "../assets/chocshake.png";

// Assuming we are using localStorage or Context API for cart management
const ItemInfo = () => {
    const { id } = useParams(); // Get the dynamic id from the URL params
    const [item, setItem] = useState(null);
    const [size, setSize] = useState('Medium');
    const [spiceLevel, setSpiceLevel] = useState('Mild');
    const [quantity, setQuantity] = useState(1);
    const [addedToCartMessage, setAddedToCartMessage] = useState('');

    // Sample data (this could be fetched from an API)
    const items = [
        { id: 1, name: 'BBQ Ribs', description: 'Slow-cooked, smoky ribs', price: 149.99, imageUrl: menuitem1 },
        { id: 2, name: 'Burger', description: 'Beefy burger', price: 89.99, imageUrl: menuitem2 },
        { id: 3, name: 'Steak', description: 'Tender steak n chips', price: 179.99, imageUrl: menuitem3 },
        { id: 4, name: 'Fries', description: 'Chip n dip', price: 49.99, imageUrl: menuitem4 },
        { id: 5, name: 'Snack Plate', description: 'Snack variety', price: 59.99, imageUrl: menuitem9, category: 'Sides' },
        { id: 6, name: 'Grilled Prawns', description: 'Prawn salad', price: 85.99, imageUrl: menuitem8, category: 'Sides' },
        { id: 7, name: 'Sweet Tooth', description: 'Tasty treat', price: 65.99, imageUrl: menuitem5, category: 'Desserts' },
        { id: 8, name: 'Mousse', description: 'Chocky mousse', price: 55.99, imageUrl: menuitem6, category: 'Desserts' },
        { id: 9, name: 'Chock Shake', description: 'Chocky milk shake', price: 39.99, imageUrl: menuitem7, category: 'Desserts' },
    ];

    // Find the item based on id
    useEffect(() => {
        const selectedItem = items.find(item => item.id === parseInt(id));
        setItem(selectedItem);
    }, [id]);

    if (!item) return <p>Loading...</p>; // Display loading state until item is found

    const handleAddToCart = () => {
        // Logic to add item to cart with customizations
        const cartItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
            size: size,
            spiceLevel: spiceLevel,
        };

        // Get current cart from localStorage or Context (for now we will use localStorage for simplicity)
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if item already exists in cart
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === size && cartItem.spiceLevel === spiceLevel);

        if (existingItemIndex !== -1) {
            // If item already exists with same customizations, update the quantity
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Otherwise, add the new item to the cart
            cart.push(cartItem);
        }

        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Display the "Added to Cart" message
        setAddedToCartMessage(`"${item.name}" has been added to your cart!`);

        // Hide the message after 3 seconds
        setTimeout(() => setAddedToCartMessage(''), 3000);
    };

    return (
        <div className="bg-gray-800 min-h-screen p-8">
            <div className="max-w-2xl mx-auto bg-slate-200 rounded-lg shadow-xl p-6">
                <Link to="/menu" className="text-gray-600 hover:text-gray-800 text-lg mb-4 inline-block">&larr; Back to Menu</Link>
                <img src={item.imageUrl} alt={item.name} className="w-full h-60 object-cover rounded-lg mb-4" />
                <h2 className="text-3xl font-bold mb-2 text-orange-500">{item.name}</h2>
                <p className="text-lg text-gray-600">{item.description}</p>

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-800">Choose Portion:</h3>
                    <select
                        className="mt-2 p-2 border rounded-lg w-full"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    >
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                </div>

                {/* Conditionally render Spice Level for non-dessert items */}
                {item.category !== 'Desserts' && (
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800">Spice Level:</h3>
                        <select
                            className="mt-2 p-2 border rounded-lg w-full"
                            value={spiceLevel}
                            onChange={(e) => setSpiceLevel(e.target.value)}
                        >
                            <option value="Mild">Mild</option>
                            <option value="Medium">Medium</option>
                            <option value="Hot">Hot</option>
                        </select>
                    </div>
                )}

                <div className="mt-4">
                    <h3 className="font-semibold text-gray-800">Quantity:</h3>
                    <div className="flex items-center space-x-2">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="bg-gray-400 text-white px-2 py-0.5 rounded-md">-</button>
                        <span className="text-lg font-bold">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="bg-gray-400 text-white px-2 py-0.5 rounded-md">+</button>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <span className="text-xl font-semibold text-red-600">R{(item.price * quantity).toFixed(2)}</span>
                    <button
                        onClick={handleAddToCart}
                        className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-all"
                    >
                        Add to Cart
                    </button>
                </div>

                {/* Message displayed after adding the item to cart */}
                {addedToCartMessage && (
                    <div className="mt-4 p-3 bg-green-500 text-white rounded-md text-center">
                        {addedToCartMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemInfo;
