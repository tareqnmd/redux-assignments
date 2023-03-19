import { useSelector } from 'react-redux';
import { useGetBooksQuery } from '../../features/api/apiSlice';
import BookCard from './BookCard';

const filteredBooks = (books, searchText, featured) => {
	const filteredData = books.filter((book) =>
		book.name.toLowerCase().includes(searchText.toLowerCase())
	);
	return featured === 'featured'
		? filteredData.filter((item) => item.featured)
		: filteredData;
};

const BookList = () => {
	const { data: books, isLoading, isError } = useGetBooksQuery();
	const { searchText, featured } = useSelector((state) => state.filter);

	let content = null;
	if (isLoading) {
		content = 'Loading...';
	}
	if (!isLoading && isError) {
		content = 'Error Found';
	}
	if (!isLoading && !isError && books.length === 0) {
		content = 'No Data Found';
	}
	if (!isLoading && !isError && books.length > 0) {
		content = filteredBooks(books, searchText, featured).map((book) => (
			<BookCard
				key={book.id}
				book={book}
			/>
		));
	}
	return (
		<div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
			{content}
		</div>
	);
};

export default BookList;
