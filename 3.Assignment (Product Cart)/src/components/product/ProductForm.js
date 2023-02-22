const ProductForm = () => {
	return (
		<div>
			<div class="formContainer">
				<h4 class="formTitle">Add New Product</h4>
				<form class="space-y-4 text-[#534F4F]" id="lws-addProductForm">
					<div class="space-y-2">
						<label for="name">Product Name</label>
						<input class="addProductInput" type="text" id="name" required />
					</div>
					<div class="space-y-2">
						<label for="category">Category</label>
						<input class="addProductInput" type="text" id="category" required />
					</div>
					<div class="space-y-2">
						<label for="image">Image Url</label>
						<input class="addProductInput" type="text" id="image" required />
					</div>
					<div class="grid grid-cols-2 gap-8 pb-4">
						<div class="space-y-2">
							<label for="price">Price</label>
							<input
								class="addProductInput"
								type="number"
								id="lws-inputPrice"
								required
							/>
						</div>
						<div class="space-y-2">
							<label for="quantity">Quantity</label>
							<input
								class="addProductInput"
								type="number"
								id="lws-inputQuantity"
								required
							/>
						</div>
					</div>
					<button type="submit" id="lws-inputSubmit" class="submit">
						Add Product
					</button>
				</form>
			</div>
		</div>
	);
};

export default ProductForm;
