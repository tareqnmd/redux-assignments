import { BOOK_ADD, BOOK_DELETE, BOOK_EDIT } from './actionTypes';
import initialState from './initialState';

const nextTodoId = (data) => {
	const maxId = data.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case BOOK_ADD:
			const newBook = {
				id: nextTodoId(state),
				...payload,
			};
			return [...state, newBook];
		case BOOK_EDIT:
			return state.map((item) => {
				if (item.id === payload.id) {
					return { ...payload };
				}
				return item;
			});
		case BOOK_DELETE:
			return state.filter((book) => book.id !== payload);
		default:
			return state;
	}
};

export default reducer;
