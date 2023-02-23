import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItems = () => {
	const cartItems = useSelector((state) => state.cart);
	if (cartItems.length === 0) return <div>No Product Found</div>;
	return (
		<div className="space-y-6">
			{cartItems.map((item) => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default CartItems;
