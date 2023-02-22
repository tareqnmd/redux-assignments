import { useSelector } from 'react-redux';
import CartItem from './CartItem';
const CartItems = () => {
	const products = useSelector((state) => state.products);
	products.length === 0 && <>No Product Found</>;
	return (
		<div className="space-y-6">
			{products.map((product) => (
				<CartItem product={product} />
			))}
		</div>
	);
};

export default CartItems;
