import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getRelatedBlogs from './relatedBlogsAPI';

const initialState = {
	relatedBlogs: [],
	isLoading: true,
	isError: false,
	error: '',
};

export const fetchRelatedBlogs = createAsyncThunk(
	'relatedBlogs/fetchRelatedBlogs',
	async ({ tags, id }) => {
		const blogs = getRelatedBlogs(tags, id);
		return blogs;
	}
);

const relatedBlogsSlice = createSlice({
	name: 'relatedBlogs',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchRelatedBlogs.pending, (state, action) => {
			state.relatedBlogs = [];
			state.isLoading = true;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
			state.relatedBlogs = action.payload;
			state.isLoading = false;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchRelatedBlogs.rejected, (state, action) => {
			state.relatedBlogs = [];
			state.isLoading = true;
			state.isError = true;
			state.error = action.error.message;
		});
	},
});

export default relatedBlogsSlice.reducer;
