import { PRODUCT_ADD } from './actionTypes';
import initialState from './initialState';

const nextTodoId = (todos) => {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case PRODUCT_ADD:
			const newProduct = {
				id: nextTodoId(state),
				...payload,
			};
			return [...state, newProduct];
		default:
			return state;
	}
};
export default reducer;
