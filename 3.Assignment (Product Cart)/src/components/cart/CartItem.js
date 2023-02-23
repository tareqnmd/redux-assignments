import { useDispatch } from 'react-redux';
import { cartAdd, cartDelete, cartRemove } from '../../redux/cart/actions';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();
	const { id, image, name, category, price, itemInCart, quantity } = item;
	const deleteCartItem = () => {
		dispatch(cartDelete(id));
	};
	const removeCartItem = () => {
		dispatch(cartRemove(id));
	};
	const addCartItem = () => {
		dispatch(cartAdd({ id }));
	};
	return (
		<div className="cartCard">
			<div className="flex items-center col-span-6 space-x-6">
				<img className="lws-cartImage" src={image} alt="product" />
				<div className="space-y-2">
					<h4 className="lws-cartName">{name}</h4>
					<p className="lws-cartCategory">{category}</p>
					<p>
						BDT <span className="lws-cartPrice">{price}</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
				<div className="flex items-center space-x-4">
					<button
						className="lws-incrementQuantity disabled-st"
						disabled={itemInCart === quantity}
						onClick={addCartItem}
					>
						<i className="text-lg fa-solid fa-plus"></i>
					</button>
					<span className="lws-cartQuantity">{itemInCart}</span>
					<button className="lws-decrementQuantity" onClick={removeCartItem}>
						<i className="text-lg fa-solid fa-minus"></i>
					</button>
				</div>
				<p className="text-lg font-bold">
					BDT <span className="lws-calculatedPrice">{price * itemInCart}</span>
				</p>
			</div>
			<div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
				<button className="lws-removeFromCart" onClick={deleteCartItem}>
					<i className="text-lg text-red-400 fa-solid fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default CartItem;
