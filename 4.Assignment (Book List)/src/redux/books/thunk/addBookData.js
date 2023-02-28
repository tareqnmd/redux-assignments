import { bookAdd } from '../actions';

const addBookData = (data) => {
	return async (dispatch) => {
		const response = await fetch(`http://localhost:9000/books`, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: { 'Content-Type': 'application/json;charset=UTF-8' },
		});
		const book = await response.json();
		dispatch(bookAdd(book));
	};
};

export default addBookData;
