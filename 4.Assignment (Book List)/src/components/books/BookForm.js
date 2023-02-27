import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookAdd } from '../../redux/books/actions';
const BookForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({ featured: false });

	const stateChange = (e) => {
		const { name, value, checked } = e.target;
		setFormData((prev) => {
			const newData = name === 'featured' ? { [name]: !!checked } : { [name]: value ?? null };
			return { ...prev, ...newData };
		});
	};
	const addHandler = () => {
		dispatch(bookAdd(formData));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addHandler();
		e.target.reset();
		setFormData({});
	};

	return (
		<div>
			<div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
				<h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
				<form className="book-form" onSubmit={handleSubmit}>
					<div className="space-y-2">
						<label htmlFor="name">Book Name</label>
						<input
							required
							className="text-input"
							type="text"
							name="name"
							onChange={stateChange}
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="category">Author</label>
						<input
							required
							className="text-input"
							type="text"
							onChange={stateChange}
							name="author"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="image">Image Url</label>
						<input
							required
							className="text-input"
							type="text"
							onChange={stateChange}
							name="thumbnail"
						/>
					</div>

					<div className="grid grid-cols-2 gap-8 pb-4">
						<div className="space-y-2">
							<label htmlFor="price">Price</label>
							<input
								required
								className="text-input"
								type="number"
								onChange={stateChange}
								name="price"
							/>
						</div>

						<div className="space-y-2">
							<label htmlFor="quantity">Rating</label>
							<input
								required
								className="text-input"
								type="number"
								onChange={stateChange}
								name="rating"
								min="1"
								max="5"
							/>
						</div>
					</div>

					<div className="flex items-center">
						<input
							onChange={stateChange}
							type="checkbox"
							name="featured"
							className="w-4 h-4"
						/>
						<label htmlFor="featured" className="ml-2 text-sm">
							This is a featured book
						</label>
					</div>

					<button type="submit" className="submit" id="submit">
						Add Book
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookForm;
