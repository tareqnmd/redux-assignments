import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditBookMutation } from '../../features/api/apiSlice';

const Form = ({ book }) => {
	const [editBook, { isLoading, isError, isSuccess }] = useEditBookMutation();
	const navigate = useNavigate();
	const [values, setValues] = useState({
		name: '',
		author: '',
		thumbnail: '',
		price: '',
		rating: '',
		featured: false,
	});

	const stateChange = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value ?? '' }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		editBook({
			id: book.id,
			data: {
				...values,
				price: Number(values.price),
				rating: Number(values.rating),
			},
		});
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [isSuccess, navigate]);

	useEffect(() => {
		if (book.id) {
			const { id, ...rest } = book;
			setValues(rest);
		}
	}, [book]);
	return (
		<>
			<form
				className="book-form"
				onSubmit={submitHandler}
			>
				<div className="space-y-2">
					<label htmlFor="lws-bookName">Book Name</label>
					<input
						required
						className="text-input"
						type="text"
						id="lws-bookName"
						value={values.name}
						onChange={stateChange}
						name="name"
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="lws-author">Author</label>
					<input
						required
						className="text-input"
						type="text"
						value={values.author}
						onChange={stateChange}
						id="lws-author"
						name="author"
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="lws-thumbnail">Image Url</label>
					<input
						required
						className="text-input"
						value={values.thumbnail}
						type="text"
						id="lws-thumbnail"
						onChange={stateChange}
						name="thumbnail"
					/>
				</div>

				<div className="grid grid-cols-2 gap-8 pb-4">
					<div className="space-y-2">
						<label htmlFor="lws-price">Price</label>
						<input
							required
							className="text-input"
							type="number"
							value={values.price}
							onChange={stateChange}
							id="lws-price"
							name="price"
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="lws-rating">Rating</label>
						<input
							required
							className="text-input"
							type="number"
							value={values.rating}
							id="lws-rating"
							onChange={stateChange}
							name="rating"
							min="1"
							max="5"
						/>
					</div>
				</div>

				<div className="flex items-center">
					<input
						id="lws-featured"
						type="checkbox"
						checked={values.featured}
						name="featured"
						onChange={stateChange}
						className="w-4 h-4"
					/>
					<label
						htmlFor="lws-featured"
						className="ml-2 text-sm"
					>
						This is a featured book
					</label>
				</div>

				<button
					type="submit"
					className="submit"
					id="lws-submit"
				>
					Edit Book
				</button>
			</form>
			{isLoading && <div>Submitting...</div>}
			{!isLoading && isError && <div>Error Submitting Data</div>}
		</>
	);
};

export default Form;
