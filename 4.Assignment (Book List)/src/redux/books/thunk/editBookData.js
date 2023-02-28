import { bookEdit } from '../actions';

const editBookData = (data) => {
	return async (dispatch) => {
		const response = await fetch(`http://localhost:9000/books/${data.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ data }),
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		});
		const book = await response.json();
		dispatch(bookEdit(book));
	};
};

export default editBookData;
