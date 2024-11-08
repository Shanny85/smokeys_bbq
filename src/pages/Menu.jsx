import { useState } from 'react';
import { Link } from "react-router-dom";
import menuitem1 from '../assets/porkribs.png';
import menuitem2 from '../assets/burger.png';
import menuitem3 from '../assets/steaknchips.png';
import menuitem4 from '../assets/chipndip.png';
import menuitem5 from '../assets/cookie.png';
import menuitem6 from '../assets/herodessert.png';
import menuitem7 from '../assets/chocshake.png';
import menuitem8 from '../assets/grilledprawns.png';
import menuitem9 from '../assets/snackplate.png';

const MenuListing = () => {
    const items = [
        { id: 1, name: 'BBQ Ribs', description: 'Slow-cooked, smoky ribs', price: 149.99, imageUrl: menuitem1, category: 'Main' },
        { id: 2, name: 'Burger', description: 'Beefy burger', price: 89.99, imageUrl: menuitem2, category: 'Main' },
        { id: 3, name: 'Steak', description: 'Tender steak n chips', price: 179.99, imageUrl: menuitem3, category: 'Main' },
        { id: 4, name: 'Fries', description: 'Chip n dip', price: 49.99, imageUrl: menuitem4, category: 'Sides' },
        { id: 5, name: 'Snack Plate', description: 'Snack variety', price: 59.99, imageUrl: menuitem9, category: 'Sides' },
        { id: 6, name: 'Grilled Prawns', description: 'Prawn salad', price: 85.99, imageUrl: menuitem8, category: 'Sides' },
        { id: 7, name: 'Sweet Tooth', description: 'Tasty treat', price: 65.99, imageUrl: menuitem5, category: 'Desserts' },
        { id: 8, name: 'Mousse', description: 'Chocky mousse', price: 55.99, imageUrl: menuitem6, category: 'Desserts' },
        { id: 9, name: 'Chock Shake', description: 'Chocky milk shake', price: 39.99, imageUrl: menuitem7, category: 'Desserts' },
        // more items...
    ];

    // State for filtering and sorting
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortOrder, setSortOrder] = useState('asc');  // 'asc' for ascending, 'desc' for descending

    // Categories available
    const categories = ['All', 'Main', 'Sides', 'Desserts'];

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Function to handle sorting by price
    const handleSortChange = () => {
        setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    };

    // Filter items by selected category
    const filteredItems = items.filter(item => selectedCategory === 'All' || item.category === selectedCategory);

    // Sort items by price
    const sortedItems = filteredItems.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return (
        <div className="bg-gray-800 min-h-screen p-8">
            <h2 className="text-3xl font-bold mb-6 text-orange-500 text-center">Menu</h2>

            <div className="flex flex-col sm:flex-row justify-between mb-6">
                {/* Sort by Price Button */}
                <button
                    onClick={handleSortChange}
                    className="bg-red-600 text-white py-2 px-6 rounded-lg mb-4 sm:mb-0 hover:bg-red-700 transition-all w-full sm:w-auto"
                >
                    Sort by Price ({sortOrder === 'asc' ? 'Low to High' : 'High to Low'})
                </button>

                {/* Filter by Category Dropdown */}
                <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg transition-all w-full sm:w-auto"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Loop through categories and display filtered & sorted items */}
            {categories.slice(1).map((category) => {
                const categoryItems = sortedItems.filter(item => item.category === category);

                if (categoryItems.length === 0) return null;

                return (
                    <div key={category} className="mb-8">
                        <h3 className="text-2xl font-semibold text-orange-500 mb-4">{category}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative bg-cover bg-center p-4 rounded-lg shadow-lg overflow-hidden"
                                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                                >
                                    <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                                        <h3 className="text-3xl font-semibold text-white mb-2">{item.name}</h3>
                                        <p className="text-lg text-gray-300">{item.description}</p>
                                        <div className="flex justify-between items-center mt-4">
                                            <span className="text-xl font-semibold text-red-600">R{item.price}</span>
                                            <Link to={`/item/${item.id}`} relative="path">
                                                <button className="mt-2 ml-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all w-full md:w-auto">
                                                    Add to Cart
                                                </button>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MenuListing;
