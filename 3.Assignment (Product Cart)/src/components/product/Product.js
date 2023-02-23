import { useDispatch, useSelector } from 'react-redux';
import { cartAdd } from '../../redux/cart/actions';

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart);
	const { id, name, image, category, price, quantity } = product;
	const itemInCart = cartItems.find((item) => item.id === id)?.itemInCart;
	const addToCart = () => {
		dispatch(cartAdd(product));
	};
	return (
		<div className="lws-productCard">
			<img className="lws-productImage" src={image} alt="product" />
			<div className="p-4 space-y-2">
				<h4 className="lws-productName">{name}</h4>
				<p className="lws-productCategory">{category}</p>
				<div className="flex items-center justify-between pb-2">
					<p className="productPrice">
						BDT <span className="lws-price">{price}</span>
					</p>
					<p className="productQuantity">
						QTY <span className="lws-quantity">{quantity}</span>
					</p>
				</div>
				<button
					className="lws-btnAddToCart disabled-st"
					disabled={quantity === itemInCart}
					onClick={addToCart}
				>
					Add To Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
