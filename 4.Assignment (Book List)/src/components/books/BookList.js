import BookForm from './BookForm';
import Books from './Books';

const BookList = () => {
	return (
		<div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
			<Books />
			<BookForm />
		</div>
	);
};

export default BookList;
