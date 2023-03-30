import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchData: '' };

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		searchTasks: (state, action) => {
			state.searchData = action.payload;
		},
	},
});

export const { searchTasks } = tasksSlice.actions;
export default tasksSlice;
