import { useParams } from 'react-router-dom';
import { useGetBookQuery } from '../../features/api/apiSlice';
import Form from './Form';

const EditBook = () => {
	const { bookId } = useParams();
	const { data: book, isError, isLoading } = useGetBookQuery(bookId);

	let content = null;
	if (isLoading) {
		content = 'Loading...';
	}
	if (!isLoading && isError) {
		content = 'Error Found';
	}
	if (!isLoading && !isError && book.id) {
		content = 'No Data Found';
	}
	if (!isLoading && !isError && book.id > 0) {
		content = <Form book={book} />;
	}
	return (
		<>
			<h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
			{content}
		</>
	);
};

export default EditBook;
