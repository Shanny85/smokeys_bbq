import { useState, useEffect } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Nav from './components/Nav'; // Import the Nav component
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/Home'; // Home Page
import Login from './pages/Login';
import Menu from './pages/Menu';
import Cart from "./components/Cart.jsx";
import ItemInfo from "./pages/ItemInfo.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"; // ItemInfo Page

function App() {
    const [isSplashFinished, setIsSplashFinished] = useState(false);

    // Simulate splash screen timeout (e.g., 3 seconds)
    useEffect(() => {
        const splashTimeout = setTimeout(() => {
            setIsSplashFinished(true); // Set to true after 3 seconds
        }, 3000); // Splash screen for 3 seconds

        return () => clearTimeout(splashTimeout); // Cleanup timeout on unmount
    }, []);

    return (
        <BrowserRouter future={{v7_relativeSplatPath: true}}>
            {/* Render Nav on all pages */}
            <Nav />

            <Routes>
                {/* Splash screen route */}
                <Route path="/" element={isSplashFinished ? <HomePage /> : <SplashScreen />} />

                {/* Login route */}
                <Route path="/login" element={<Login />} />

                {/* Menu route */}
                <Route path="/menu" element={<Menu />} />

                {/* Item route: dynamic based on item id */}
                <Route path="/item/:id" element={<ItemInfo />} />

                {/* Cart route */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
