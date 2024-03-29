import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { filterSearch } from '../redux/filters/actions';

const Navbar = () => {
	const dispatch = useDispatch();
	const searchTextHandler = (e) => {
		const { value } = e.target;
		dispatch(filterSearch(value ?? ''));
	};

	return (
		<nav className="py-4 2xl:px-6">
			<div className="container flex items-center justify-between">
				<img src={logo} width="150px" className="object-contain" alt="" />

				<ul className="hidden md:flex items-center space-x-6">
					<li className="font-semibold cursor-pointer">
						<Link to="/">Book Store</Link>
					</li>
					<li className="cursor-pointer">
						<Link to="/wishlist">Wishlist</Link>
					</li>
					<li className="cursor-pointer">
						<Link to="/my-collection">My Collection</Link>
					</li>
				</ul>

				<form className="flex items-center">
					<div className="group relative rounded-md bg-white">
						<svg
							width="20"
							height="20"
							fill="currentColor"
							className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							></path>
						</svg>
						<input
							type="text"
							placeholder="Filter books..."
							className="search"
							id="lws-searchBook"
							onChange={searchTextHandler}
						/>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
