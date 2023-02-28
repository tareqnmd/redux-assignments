import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getBooksData from '../../redux/books/thunk/editBookData';
import { filterType } from '../../redux/filters/actions';
import Book from './Book';

const filterMap = (books, type, searchText) => {
	return books
		.filter((item) => (type === 'All' ? item : item.featured === true))
		.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
};

const Books = () => {
	const filter = useSelector((state) => state.filter);
	const { books } = useSelector((state) => state.book);
	const { type, searchText } = filter;
	const dispatch = useDispatch();
	const filterChange = (type) => {
		dispatch(filterType(type));
	};

	useEffect(() => {
		dispatch(getBooksData);
	}, [dispatch]);

	return (
		<div className="order-2 xl:-order-1">
			<div className="flex items-center justify-between mb-12">
				<h4 className="mt-2 text-xl font-bold">Book List</h4>

				<div className="flex items-center space-x-4">
					<button
						className={`filter-btn ${type === 'All' && 'active-filter'}`}
						id="lws-filterAll"
						onClick={() => {
							filterChange('All');
						}}
					>
						All
					</button>
					<button
						className={`filter-btn ${type === 'Featured' && 'active-filter'}`}
						id="lws-filterFeatured"
						onClick={() => {
							filterChange('Featured');
						}}
					>
						Featured
					</button>
				</div>
			</div>
			<div className="lws-bookContainer">
				{books.length === 0 && <>No Book Found</>}
				{filterMap(books, type, searchText).map((book) => (
					<Book key={book.id} book={book} />
				))}
			</div>
		</div>
	);
};

export default Books;
