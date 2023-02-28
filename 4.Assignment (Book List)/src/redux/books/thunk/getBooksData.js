import { bookLoaded } from '../actions';

const getBooksData = async (dispatch) => {
	const response = await fetch('http://localhost:9000/books');
	const books = await response.json();
	dispatch(bookLoaded(books));
};

export default getBooksData;
