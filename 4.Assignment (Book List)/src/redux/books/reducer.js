import { BOOK_ADD, BOOK_DELETE, BOOK_EDIT, BOOK_LOADED, BOOK_UPDATE_DATA } from './actionTypes';
import initialState from './initialState';

const nextTodoId = (data) => {
	const maxId = data.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case BOOK_LOADED:
			return { ...state, editMode: false, editableData: {}, books: payload };
		case BOOK_ADD:
			const newBook = {
				id: nextTodoId(state.books),
				...payload,
			};
			return { ...state, editMode: false, editableData: {}, books: [...state.books, newBook] };
		case BOOK_EDIT:
			return {
				...state,
				editMode: false,
				editableData: {},
				books: state.books.map((item) => {
					if (item.id === payload.id) {
						return { ...payload };
					}
					return item;
				}),
			};
		case BOOK_UPDATE_DATA:
			return {
				...state,
				editMode: true,
				editableData: state.books.find((item) => item.id === payload),
			};
		case BOOK_DELETE:
			return {
				...state,
				editMode: false,
				editableData: {},
				books: state.books.filter((book) => book.id !== payload),
			};
		default:
			return state;
	}
};

export default reducer;
