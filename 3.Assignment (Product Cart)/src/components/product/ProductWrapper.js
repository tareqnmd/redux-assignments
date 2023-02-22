import ProductForm from './ProductForm';
import Products from './Products';

const ProductWrapper = () => {
	return (
		<div className="productWrapper">
			<Products />
			<ProductForm />
		</div>
	);
};

export default ProductWrapper;
