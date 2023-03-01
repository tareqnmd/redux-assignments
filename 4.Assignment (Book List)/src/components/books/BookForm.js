import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addBookData from '../../redux/books/thunk/addBookData';
import editBookData from '../../redux/books/thunk/editBookData';
const BookForm = () => {
	const dispatch = useDispatch();
	const { editMode, editableData } = useSelector((state) => state.book);
	const [formData, setFormData] = useState({
		name: '',
		rating: '',
		price: '',
		thumbnail: '',
		featured: false,
		author: '',
	});

	const stateChange = (e) => {
		const { name, value, checked } = e.target;
		setFormData((prev) => {
			const newData = name === 'featured' ? { [name]: !!checked } : { [name]: value ?? null };
			return { ...prev, ...newData };
		});
	};
	const addHandler = (edit) => {
		dispatch(edit ? editBookData(formData) : addBookData(formData));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addHandler(!!formData?.id);
		e.target.reset();
		setFormData({
			name: '',
			rating: '',
			price: '',
			thumbnail: '',
			featured: false,
			author: '',
		});
	};

	useEffect(() => {
		editMode && setFormData(editableData);
	}, [editMode, editableData]);

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
							value={formData?.name}
							onChange={stateChange}
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="category">Author</label>
						<input
							required
							className="text-input"
							type="text"
							value={formData?.author}
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
							value={formData?.thumbnail}
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
								value={formData?.price}
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
								value={formData?.rating}
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
							checked={formData?.featured}
							name="featured"
							className="w-4 h-4"
						/>
						<label htmlFor="featured" className="ml-2 text-sm">
							This is a featured book
						</label>
					</div>

					<button type="submit" className="submit" id="submit">
						{editMode ? 'Update Book' : 'Add Book'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookForm;
