import { useSelector } from 'react-redux';
import Product from './Product';
const Products = () => {
	const products = useSelector((state) => state.products);
	if (products.length === 0) return <div>No Product Found</div>;
	return (
		<div className="productContainer" id="lws-productContainer">
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default Products;
