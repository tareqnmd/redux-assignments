import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Navbar from './components/Navbar';
import ProductWrapper from './components/product/ProductWrapper';

const App = () => {
	return (
		<>
			<Navbar />
			<main class="py-16">
				<Routes>
					<Route path="/cart" element={<Cart />} />
					<Route path="/" element={<ProductWrapper />} />
					<Route path="*" element={<>Not Found</>} />
				</Routes>
			</main>
		</>
	);
};

export default App;
