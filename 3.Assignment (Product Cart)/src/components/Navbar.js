import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import navImage from '../assets/images/logo.png';
const Navbar = () => {
	const cartItems = useSelector((state) => state.cart);
	const cartLength = cartItems.reduce((acc, item) => acc + item.itemInCart, 0);
	return (
		<nav className="bg-[#171C2A] py-4">
			<div className="navBar">
				<Link to="/">
					<img src={navImage} alt="LWS" className="max-w-[140px]" />
				</Link>

				<div className="flex gap-4">
					<Link to="/" className="navHome" id="lws-home">
						Home
					</Link>
					<Link to="/cart" className="navCart" id="lws-cart">
						<i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
						<span id="lws-totalCart">{cartLength}</span>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
