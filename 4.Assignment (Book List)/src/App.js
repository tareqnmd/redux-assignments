import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './components/books/BookList';
import Navbar from './components/Navbar';
import Wishlist from './components/wishlist/Wishlist';

const App = () => {
	return (
		<>
			<Navbar />
			<main className="py-12 2xl:px-6">
				<Routes>
					<Route path="/" element={<BookList />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="*" element={<>Not Found</>} />
				</Routes>
			</main>
		</>
	);
};

export default App;
