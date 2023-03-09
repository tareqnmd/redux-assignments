const { createSlice } = require('@reduxjs/toolkit');
const initialState = {
	sortType: '',
	filterType: 'all',
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		sortType: (state, action) => {
			state.sortType = action.payload;
		},
		filterType: (state, action) => {
			state.filterType = action.payload;
		},
	},
});

export const { sortType, filterType } = filterSlice.actions;
export default filterSlice.reducer;
