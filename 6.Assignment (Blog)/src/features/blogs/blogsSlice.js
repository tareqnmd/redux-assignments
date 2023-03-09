import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlogs from './blogsAPI';

const initialState = {
	blogs: [],
	isLoading: true,
	isError: false,
	error: '',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async ({ sortType, filterType }) => {
	const blogs = getBlogs(sortType, filterType);
	return blogs;
});

const blogsSlice = createSlice({
	name: 'blogs',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchBlogs.pending, (state, action) => {
			state.blogs = [];
			state.isLoading = true;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchBlogs.fulfilled, (state, action) => {
			state.blogs = action.payload;
			state.isLoading = false;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchBlogs.rejected, (state, action) => {
			state.blogs = [];
			state.isLoading = true;
			state.isError = true;
			state.error = action.error.message;
		});
	},
});

export default blogsSlice.reducer;
