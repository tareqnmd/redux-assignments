const ProductForm = () => {
	return (
		<div>
			<div className="formContainer">
				<h4 className="formTitle">Add New Product</h4>
				<form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
					<div className="space-y-2">
						<label htmlFor="name">Product Name</label>
						<input className="addProductInput" type="text" id="name" required />
					</div>
					<div className="space-y-2">
						<label htmlFor="category">Category</label>
						<input className="addProductInput" type="text" id="category" required />
					</div>
					<div className="space-y-2">
						<label htmlFor="image">Image Url</label>
						<input className="addProductInput" type="text" id="image" required />
					</div>
					<div className="grid grid-cols-2 gap-8 pb-4">
						<div className="space-y-2">
							<label htmlFor="price">Price</label>
							<input
								className="addProductInput"
								type="number"
								id="lws-inputPrice"
								required
							/>
						</div>
						<div className="space-y-2">
							<label htmlFor="quantity">Quantity</label>
							<input
								className="addProductInput"
								type="number"
								id="lws-inputQuantity"
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
