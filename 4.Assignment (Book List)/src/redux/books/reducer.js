import initialState from './initialState';

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		default:
			return state;
	}
};

export default reducer;
