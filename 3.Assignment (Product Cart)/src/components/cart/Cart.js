import CartItems from './CartItems';
import CartBill from './CartBill';

const Cart = () => {
	return (
		<div className="container 2xl:px-8 px-2 mx-auto">
			<h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
			<div className="cartListContainer">
				<CartItems />
				<CartBill />
			</div>
		</div>
	);
};

export default Cart;
