import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productAdd } from '../../redux/product/actions';
const ProductForm = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({});
	
	const stateChangeHandler = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value ?? null }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(productAdd(values));
		setValues({});
		e.target.reset();
	};
	return (
		<div>
			<div className="formContainer">
				<h4 className="formTitle">Add New Product</h4>
				<form
					className="space-y-4 text-[#534F4F]"
					id="lws-addProductForm"
					onFinish={submitHandler}
				>
					<div className="space-y-2">
						<label htmlFor="name">Product Name</label>
						<input
							className="addProductInput"
							type="text"
							name="name"
							onChange={stateChangeHandler}
							required
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="category">Category</label>
						<input
							className="addProductInput"
							type="text"
							name="category"
							onChange={stateChangeHandler}
							required
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="image">Image Url</label>
						<input
							className="addProductInput"
							type="text"
							name="image"
							onChange={stateChangeHandler}
							required
						/>
					</div>
					<div className="grid grid-cols-2 gap-8 pb-4">
						<div className="space-y-2">
							<label htmlFor="price">Price</label>
							<input
								className="addProductInput"
								type="number"
								onChange={stateChangeHandler}
								name="price"
								required
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="quantity">Quantity</label>
							<input
								className="addProductInput"
								type="number"
								name="quantity"
								onChange={stateChangeHandler}
								required
							/>
						</div>
					</div>
					<button type="submit" id="lws-inputSubmit" className="submit">
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProductForm;
