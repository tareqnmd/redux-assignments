import { createSlice } from '@reduxjs/toolkit';

const initialState = { checked: [] };

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		checkedProjects: (state, action) => {
			state.checked = action.payload;
		},
		setCheckedProjects: (state, action) => {
			state.checked.push(action.payload);
		},
		removeCheckedProjects: (state, action) => {
			state.checked = state.filter((item) => item !== action.payload);
		},
	},
});

export const { checkedProjects, setCheckedProjects, removeCheckedProjects } = projectsSlice.actions;
export default projectsSlice;
