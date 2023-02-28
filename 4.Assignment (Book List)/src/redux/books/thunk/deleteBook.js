import { bookDelete } from '../actions';

const deleteBook = (id) => {
	return async (dispatch) => {
		const response = await fetch(`http://localhost:9000/books/${id}`, {
			method: 'DELETE',
		});
		await response.json();
		dispatch(bookDelete(id));
	};
};

export default deleteBook;
