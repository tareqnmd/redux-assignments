import CartItems from './CartItems';
import CartBill from './CartBill';

const Cart = () => {
	return (
		<div class="container 2xl:px-8 px-2 mx-auto">
			<h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
			<div class="cartListContainer">
				<CartItems />
				<CartBill />
			</div>
		</div>
	);
};

export default Cart;
